import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "./contexts/CartContext";
import {
  Button,
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";

export default function MyNavBar(props) {
  const cart = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const handleCartClose = () => setShowCart(false);
  const handleCartOpen = () => setShowCart(true);

  return (
    <div>
      <Navbar className="bg-primary" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand>WooRi Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Menus">
                Menus
              </Nav.Link>
              <Nav.Link as={Link} to="/Catering">
                Catering
              </Nav.Link>
            </Nav>
            <Nav classname="ml-auto">
              <Button variant="primary" onClick={handleCartOpen}>
                Cart: {cart.getCount()}
              </Button>
              <Nav.Link as={Link} to="/ContactUs">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.items.map((item, index) => (
            <Row key={index}>
              <Col>
                {item.name} :{" "}
                <Button
                  onClick={() => {
                    cart.addItem(item.name, item.price);
                  }}
                >
                  +
                </Button>
                {item.quantity}
                <Button
                  onClick={() => {
                    cart.removeItem(item.name);
                  }}
                >
                  -
                </Button>
              </Col>
              <Col>
                ${item.quantity * item.price}
                <Button
                  onClick={() => {
                    cart.cancelItem(item.name);
                  }}
                >
                  X
                </Button>
              </Col>
            </Row>
          ))}
          <Row>
            <hr />
          </Row>
          <Row>
            <Col>Total:</Col>
            <Col>${cart.getTotalCost()}</Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
