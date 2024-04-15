import { Container, Row, Col } from "react-bootstrap";
import SaleItemCard from "./SaleItemCard";
import products from "./products";

export default function FeaturedProducts() {
  const rowStyle = {
    maxWidth: "1200px",
  };
  return (
    <Container fluid className="bg-white py-5">
      <h2 className="text-center mb-5">Featured Products and Deals</h2>
      <Row style={rowStyle} className="mx-auto">
        {products.map((product, index) => (
          <Col xs={12} sm={6} md={4} key={index}>
            <SaleItemCard product={product} className="mb-4" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
