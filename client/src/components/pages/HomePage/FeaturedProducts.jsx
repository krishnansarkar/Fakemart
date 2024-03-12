import { Container } from "react-bootstrap";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Sura Whole Cabbage Kimchi",
      quantity: "5 Kg",
      price: "$39.99",
      deal: "$29.99",
    },
    {
      name: "PMO Soft Tofu",
      quantity: "16 Oz",
      price: "$2.49",
      deal: "3 for $6",
    },
  ];

  return (
    <Container className="bg-white py-5" id="featureddeals">
      <h2 className="text-center">Featured Products and Deals</h2>
      {products.map((product) => (
        <div>
          <p>{product.name}</p>
          <p>{product.quantity}</p>
          <p>{product.price}</p>
          <p>{product.deal}</p>
        </div>
      ))}
    </Container>
  );
}
