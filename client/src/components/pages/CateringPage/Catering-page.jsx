import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CateringPage() {
  const imageStyle = {
    borderRadius: "50% 50% 0% 0%",
    width: "455px",
  };

  return (
    <Container fluid className="bg-white py-5 justify-content-center">
      <Row>
        <Col>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bimbop.png"}
              alt="Bimbop"
              style={imageStyle}
            />
          </div>
        </Col>
        <Col>
          <h1>Let us cater your next event</h1>
          <p className="lead mb-3">
            We pride ourselves on not only having the freshest ingredients, but
            also having the best chefs in the area bringing traditional Korean
            flavors to Woori Mart Princeton.
          </p>
          <p className="lead mb-3">
            Every week we'll have a new specialty menu for catering. If you have
            any specialty requests or questions on pricing, call or email us and
            we will find a catering solution that works for you.
          </p>
          <p className="lead mb-3">
            Free delivery on orders over $300 within 30 minutes of our store.
          </p>
          <Link to="/ContactUs">
            <Button variant="outline-secondary">Contact Us</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
