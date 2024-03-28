import { Container, Row, Col } from "react-bootstrap";
import TopDisplay from "./TopDisplay";

export default function CateringPage() {
  return (
    <>
      <TopDisplay />
      <Container fluid className="bg-white py-5 justify-content-center">
        <Row>
          <Col>
            <h1>01</h1>
            <h3>Sushi Platters</h3>
            <p className="lead">
              Choose between rolls, sushi, sashimi or any combination of the
              three. We'll work with your price point to have a sushi platter
              for your next party or gathering.
            </p>
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/images/sushiplatter.png"}
              alt="Sushi Platter"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
