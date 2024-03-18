import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";

export default function FeaturedProducts() {
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

  const groupedProducts = Array.from(
    { length: Math.ceil(products.length / 3) },
    (_, i) => {
      return products.slice(i * 3, i * 3 + 3);
    }
  );

  const cardImageStyle = {
    height: "180px",
    "object-fit": "cover",
  };

  return (
    <Container fluid className="bg-white py-5" id="featureddeals">
      <h2 className="text-center mb-3">Featured Products and Deals</h2>
      <div className="px-5">
        {groupedProducts.map((group, r) => (
          <Row key={r}>
            {group.map((product, c) => (
              <Col xs={12} md={4} key={r + c}>
                <Card className="mb-4">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={cardImageStyle}
                  />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{product.name}</ListGroup.Item>
                    <ListGroup.Item>
                      Quantity: {product.quantity}
                    </ListGroup.Item>
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
      </div>
    </Container>
  );
}
