import { Link } from "react-router-dom";
import { useState } from "react";
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
                Cart: {props.cartFunctions.getCount()}
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
          {props.cart.map((item) => (
            <Row>
              <Col>
                {item.name} :{" "}
                <Button
                  onClick={() => {
                    props.cartFunctions.addItem(item.name);
                    console.log(item.name);
                  }}
                >
                  +
                </Button>
                {item.quantity}
                <Button
                  onClick={() => {
                    props.cartFunctions.removeItem(item.name);
                  }}
                >
                  -
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    props.cartFunctions.cancelItem(item.name);
                  }}
                >
                  X
                </Button>
              </Col>
            </Row>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
