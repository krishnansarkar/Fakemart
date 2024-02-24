import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="border-top py-5 my-5 bg-secondary text-white">
      <Container>
        <Row>
          <Col>
            <img
              width={130}
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="Woori Mart Logo"
            />
          </Col>
          <Col>
            <h2>Hours</h2>
            <h4>Woori Mart Princeton</h4>
            <p>Monday-Sunday 8am - 9pm</p>
          </Col>
          <Col>
            <h2>Socials</h2>
            <p>Instagram - Facebook - Yelp</p>
          </Col>
          <Col>
            <h2>Contact Info</h2>
            <p>64 Princeton Hightstown Rd, West Windsor Township, NJ 08550</p>
            <p>609-750-8888</p>
            <p>David@woorimartprinceton.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
  /*<div>Logo</div>
      <div>
        <h2>Hours</h2>
        <p>Woori Mart Princeton</p>
        <p>Monday-Sunday 8am - 9pm</p>
      </div>
      <div>
        <h2>Contact Info</h2>
        <p>64 Princeton Hightstown Rd, West Windsor Township, NJ 08550</p>
        <p>609-750-8888</p>
        <p>David@woorimartprinceton.com</p>
        <div>Socials</div>
      </div>
    </>
  );*/
}
