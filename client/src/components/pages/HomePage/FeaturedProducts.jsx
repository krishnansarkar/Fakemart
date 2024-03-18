import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import SaleItemCard from "./SaleItemCard";
import products from "./products";

export default function FeaturedProducts() {
  const groupedProducts = Array.from(
    { length: Math.ceil(products.length / 3) },
    (_, i) => {
      return products.slice(i * 3, i * 3 + 3);
    }
  );

  return (
    <Container fluid className="bg-white py-5" id="featureddeals">
      <h2 className="text-center mb-3">Featured Products and Deals</h2>
      <div className="px-5">
        {groupedProducts.map((group, r) => (
          <Row key={r}>
            {group.map((product, c) => (
              <Col xs={12} md={4} key={r + c}>
                <SaleItemCard product={product} className="mb-4" />
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
