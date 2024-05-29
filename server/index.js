import "dotenv/config";
import path from "path";
import express from "express";
import Stripe from "stripe";
import pg from "pg";
import { itemPrices } from "./baked_data/menus.js";

const clientDir = "./baked_data/build";
// const clientDir = "../client/build";

const host = process.env.DB_HOST_IP;
const dbPool = new pg.Pool({
  user: process.env.DB_POOL_USER,
  host: host,
  database: process.env.DB_POOL_DATABASE,
  password: process.env.DB_POOL_PASSWORD,
  port: process.env.DB_POOL_PORT,
});

const app = express();
const port = process.env.PORT || 8080;
const __dirname = import.meta.dirname;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

var products = [];
var menus = [];
await updateProducts();
await updateMenus();

async function connectToDB() {
  try {
    var dbClient = await dbPool.connect();
    return dbClient;
  } catch (error) {
    console.log("Could not connect to db. " + error);
    return null;
  }
}

async function updateProducts() {
  var dbClient = await connectToDB();
  if (dbClient == null) {
    return;
  }
  try {
    const result = await dbClient.query("SELECT * FROM featured_products");
    products = result.rows.map((product) => {
      return {
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        deal: product.sale,
        image: product.image_url,
      };
    });
  } catch (error) {
    console.error(error);
  }
  dbClient.release();
}

function buildMenuArray(data) {
  const menus = [];

  data.forEach((row) => {
    // Find or create the menu
    let menu = menus.find((m) => m.id === row.menu_id);
    if (!menu) {
      menu = {
        id: row.menu_id,
        name: row.menu_name,
        description: row.menu_description,
        leftCol: [],
        rightCol: [],
      };
      menus.push(menu);
    }

    // Determine which column the category belongs to
    const column =
      row.category_position === "left" ? menu.leftCol : menu.rightCol;

    // Find or create the category
    let category = column.find((c) => c.id === row.category_id);
    if (!category) {
      category = {
        id: row.category_id,
        name: row.category_name,
        description: row.category_description,
        items: [],
      };
      column.push(category);
    }

    // Add the item to the category
    if (row.item_id) {
      category.items.push({
        id: row.item_id,
        name: row.item_name,
        description: row.item_description,
        price: row.item_price,
      });
    }
  });

  return menus;
}

async function updateMenus() {
  var dbClient = await connectToDB();
  if (dbClient == null) {
    return;
  }
  try {
    var result = await dbClient.query(`
      SELECT 
        m.id AS menu_id,
        m.name AS menu_name,
        m.description AS menu_description,
        c.id AS category_id,
        c.name AS category_name,
        c.description AS category_description,
        c.position AS category_position,
        i.id AS item_id,
        i.name AS item_name,
        i.description AS item_description,
        i.price AS item_price
      FROM 
        menus m
      LEFT JOIN 
        categories c ON m.id = c.menu_id
      LEFT JOIN 
        items i ON c.id = i.category_id
      ORDER BY 
        m.id, c.position, c.id, i.id;
    `);
    menus = buildMenuArray(result.rows);
  } catch (error) {
    console.error(error);
  }
  dbClient.release();
}

async function getItemPrice(itemName) {
  var dbClient = await connectToDB();
  if (dbClient == null) {
    return;
  }
  try {
    var result = await dbClient.query(
      "SELECT price FROM items WHERE name=($1);",
      [itemName]
    );
    return result.rows[0].price;
  } catch (error) {
    console.error(error);
  }
  dbClient.release();
}

app.use(express.json());

app.use(express.static(path.resolve(__dirname, clientDir)));

app.use("/images", express.static("baked_data/images"));

app.get("/api/featured-products", async (req, res) => {
  res.json(products);
});

app.get("/api/menus", async (req, res) => {
  res.json(menus);
});

app.post("/create-checkout-session", async (req, res) => {
  const domainUrl = req.protocol + "://" + req.get("host") + "/Checkout";
  const { items } = req.body;
  const promises = await items.map(async (item) => {
    const name = item.name;
    const quantity = item.quantity;
    const price = await getItemPrice(name);
    console.log(price);
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: name,
        },
        unit_amount: price * 100,
      },
      quantity: quantity,
    };
  });
  const line_items = await Promise.all(promises);
  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",
    success_url: `${domainUrl}?success=true`,
    cancel_url: `${domainUrl}?canceled=true`,
  });

  res.status(200).send(session.url);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, clientDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
