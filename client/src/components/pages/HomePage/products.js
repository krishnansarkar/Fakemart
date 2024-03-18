// Temporary file for products, data will be moved to database
// Images will be moved to server-side

const products = [
  {
    name: "Sura Whole Cabbage Kimchi",
    quantity: "5 Kg",
    price: "$39.99",
    deal: "$29.99",
    image: process.env.PUBLIC_URL + "/images/logo.png",
  },
  {
    name: "PMO Soft Tofu",
    quantity: "16 Oz",
    price: "$2.49",
    deal: "3 for $6",
    image: process.env.PUBLIC_URL + "/images/KoreanFoodSaleFlyer.png",
  },
  {
    name: "3",
    quantity: "16 Oz",
    price: "$2.49",
    deal: "3 for $6",
    image: process.env.PUBLIC_URL + "/images/logo.png",
  },
  {
    name: "4",
    quantity: "16 Oz",
    price: "$2.49",
    deal: "3 for $6",
    image: process.env.PUBLIC_URL + "/images/logo.png",
  },
];

export default products;
