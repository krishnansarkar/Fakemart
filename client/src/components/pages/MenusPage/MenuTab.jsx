import { Row, Col } from "react-bootstrap";
import MenuCategory from "./MenuCategory";

export default function MenuTab(props) {
  return (
    <div>
      <Row className="mb-5">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col className="pe-5">
          {props.leftColCategories.map((category) => (
            <MenuCategory
              name={category.name}
              description={category.description}
              items={category.items}
              cart={props.cart}
            />
          ))}
        </Col>
        <Col className="pe-5">
          {props.rightColCategories.map((category) => (
            <MenuCategory
              name={category.name}
              description={category.description}
              items={category.items}
              cart={props.cart}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
}
