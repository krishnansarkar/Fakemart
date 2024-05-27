import "dotenv/config";
import path from "path";
import express from "express";
import Stripe from "stripe";
import products from "./baked_data/products.js";
import { menus, itemPrices } from "./baked_data/menus.js";
import catering from "./baked_data/catering.js";

const clientDir = "./baked_data/build";
// const clientDir = "../client/build";

const app = express();
const port = process.env.PORT || 8080;
const __dirname = import.meta.dirname;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.use(express.static(path.resolve(__dirname, clientDir)));

app.use("/images", express.static("baked_data/images"));

app.get("/api/featured-products", (req, res) => {
  res.json(products);
});

app.get("/api/menus", (req, res) => {
  res.json(menus);
});

app.get("/api/catering", (req, res) => {
  res.json(catering);
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
