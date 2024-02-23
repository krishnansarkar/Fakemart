import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function MyNavBar() {
  return (
    <div>
      <Navbar sticky="top">
        <Container>
          <Navbar.Brand>WooRi Mart</Navbar.Brand>
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
            <Nav.Link as={Link} to="/ContactUs">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
