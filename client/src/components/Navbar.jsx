import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

export default function MyNavBar() {
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
                Cart
              </Button>
              <Nav.Link as={Link} to="/ContactUs">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={showCart} onHide={handleCartClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Cart items</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
