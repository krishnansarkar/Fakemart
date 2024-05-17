import "dotenv/config";
import path from "path";
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import products from "./baked_data/products.js";
import menus from "./baked_data/menus.js";
import catering from "./baked_data/catering.js";

const app = express();
const port = 3333;
const __dirname = import.meta.dirname;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

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
  console.log(req.body);
  const domainUrl = req.protocol + "://" + req.get("host") + "/Checkout";
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

  res.status(200).send(session.url);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
