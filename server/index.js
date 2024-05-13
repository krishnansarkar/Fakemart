import "dotenv/config";
import express from "express";
import Stripe from "stripe";
import products from "./baked_data/products.js";
import menus from "./baked_data/menus.js";
import catering from "./baked_data/catering.js";

const app = express();
const port = 3333;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

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
  const domainUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Test product",
          },
          unit_amount: 3.14 * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${domainUrl}?success=true`,
    cancel_url: `${domainUrl}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
