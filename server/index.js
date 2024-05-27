import "dotenv/config";
import path from "path";
import express from "express";
import Stripe from "stripe";
import pg from "pg";
import { menus, itemPrices } from "./baked_data/menus.js";

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

app.use(express.json());

app.use(express.static(path.resolve(__dirname, clientDir)));

app.use("/images", express.static("baked_data/images"));

app.get("/api/featured-products", async (req, res) => {
  await updateProducts();
  res.json(products);
});

app.get("/api/menus", (req, res) => {
  res.json(menus);
});

app.post("/create-checkout-session", async (req, res) => {
  const domainUrl = req.protocol + "://" + req.get("host") + "/Checkout";
  const { items } = req.body;
  const line_items = items.map((item) => {
    const name = item.name;
    const quantity = item.quantity;
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: itemPrices[item.name] * 100,
      },
      quantity: item.quantity,
    };
  });
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
