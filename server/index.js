import express from "express";
import products from "./baked_data/products.js";
import menus from "./baked_data/menus.js";
import catering from "./baked_data/catering.js";

const app = express();
const port = 3333;

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

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
