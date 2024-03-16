//Todo:
// - I -
// 1. Fix final columns being different sizes if less than 3 left.
// 2. Test different image sizes.
// 3. Fix any size differentiation of images.
// - II -
// Fix color of background to off-white.
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";

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
    {
      name: "3",
      quantity: "16 Oz",
      price: "$2.49",
      deal: "3 for $6",
    },
    {
      name: "4",
      quantity: "16 Oz",
      price: "$2.49",
      deal: "3 for $6",
    },
  ];

  const groupedProducts = Array.from(
    { length: Math.ceil(products.length / 3) },
    (_, i) => {
      return products.slice(i * 3, i * 3 + 3);
    }
  );

  return (
    <Container className="bg-white py-5" id="featureddeals">
      <h2 className="text-center">Featured Products and Deals</h2>
      {groupedProducts.map((group, r) => (
        <Row key={r} className="mb-4">
          {group.map((product, c) => (
            <Col key={r + c}>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                />
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{product.name}</ListGroup.Item>
                  <ListGroup.Item>Quantity: {product.quantity}</ListGroup.Item>
                  <ListGroup.Item>Original: {product.price}</ListGroup.Item>
                  <ListGroup.Item>Sale: {product.deal}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
          {group.length < 3 && <Col></Col>}
          {group.length < 2 && <Col></Col>}
        </Row>
      ))}
    </Container>
  );
}
