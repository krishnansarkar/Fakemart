import express from "express";
import products from "./baked_data/products.js";

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

app.get("/api/menu-items", (req, res) => {
  res.json(menuItems)
}

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
