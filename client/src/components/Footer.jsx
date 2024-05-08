import { Container, Row, Col } from "react-bootstrap";
import contactInfo from "./baked-data/contactInfo";

export default function Footer() {
  return (
    <footer className="border-top py-5 bg-primary text-white">
      <Container>
        <Row>
          <Col>
            <img
              width={130}
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="Fakemart Logo"
            />
          </Col>
          <Col>
            <h2>Hours</h2>
            <h4>Fakemart</h4>
            <p>Monday-Sunday 8am - 9pm</p>
          </Col>
          <Col>
            <h2>Socials</h2>
            <p>Instagram - Facebook - Yelp</p>
          </Col>
          <Col>
            <h2>Contact Info</h2>
            <p>{contactInfo.address}</p>
            <p>{contactInfo.number}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
