import { Container, Row, Col } from "react-bootstrap";
import MenuCategory from "./MenuCategory";

export default function MenusPage() {
  const menuItemStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const itemPriceStyle = {
    textAlign: "right",
  };

  return (
    <Container>
      <Row>
        <h3>K-Dish</h3>
        <p>Bring Korea home with you</p>
      </Row>
      <Row>
        <Col>
          <MenuCategory />
        </Col>
        <Col>
          <h3>Rice and Noodles</h3>
        </Col>
      </Row>
    </Container>
  );
}
