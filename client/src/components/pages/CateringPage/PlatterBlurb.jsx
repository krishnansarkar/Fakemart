import { Container, Row, Col } from "react-bootstrap";

export default function PlatterBurb(props) {
  const rowStyle = {
    maxWidth: "800px",
  };

  const thumbnailContainerStyle = {
    maxWidth: "300px",
    maxHeight: "300px",
    overflow: "hidden",
    display: "block",
    margin: "auto",
  };

  const textElement = (
    <Col>
      <h1>{props.index}</h1>
      <h3>{props.title}</h3>
      <p className="lead">{props.description}</p>
    </Col>
  );

  const imageElement = (
    <Col>
      <img
        src={props.imageUrl}
        alt={props.altText}
        style={thumbnailContainerStyle}
      />
    </Col>
  );

  return (
    <Container fluid className="bg-white justify-content-center">
      <Row style={rowStyle} className="mx-auto my-5">
        {!props.flipOrder ? (
          <>
            {textElement}
            {imageElement}
          </>
        ) : (
          <>
            {imageElement}
            {textElement}
          </>
        )}
      </Row>
    </Container>
  );
}
