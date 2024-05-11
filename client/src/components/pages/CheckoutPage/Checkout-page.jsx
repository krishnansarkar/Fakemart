import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function CheckoutPage() {
  const cart = useContext(CartContext);

  const cartDisplay = (
    <>
      {cart.items.map((item, index) => (
        <div>
          <Row key={index}>
            <Col xs={8} className="align-middle">
              {item.name}
            </Col>
            <Col>
              ${item.quantity * item.price}
              <Button
                className="ms-3"
                variant="dark"
                onClick={() => {
                  cart.cancelItem(item.name);
                }}
              >
                X
              </Button>
            </Col>
          </Row>
          <Row className="border-bottom mb-2">
            <Col>
              <Button
                className="me-2"
                variant="light"
                onClick={() => {
                  cart.addItem(item.name, item.price);
                }}
              >
                +
              </Button>
              {item.quantity}
              <Button
                className="ms-2"
                variant="light"
                onClick={() => {
                  cart.removeItem(item.name);
                }}
              >
                -
              </Button>
            </Col>
          </Row>
        </div>
      ))}
      <Row>
        <hr />
      </Row>
      <Row>
        <Col xs={8}>Total:</Col>
        <Col>${cart.getTotalCost()}</Col>
      </Row>
    </>
  );

  const emptyCartDisplay = (
    <>
      <p>Cart is empty!</p>
      <p>
        Go to <Link to="/menus">menu!</Link>
      </p>
    </>
  );

  return (
    <Container className="py-5">
      {cart.getCount() > 0 ? cartDisplay : emptyCartDisplay}
    </Container>
  );
}
