import { Container, Row, Col } from "react-bootstrap";
import MenuCategory from "./MenuCategory";

export default function MenusPage() {
  const menuItemStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const itemPriceStyle = {
    textAlign: "right",
  };

  const leftColCategories = [
    {
      name: "Kimbab 김밥",
      description: "Korean style seaweed rolls",
      items: [
        {
          name: "Bulgogi Beef Kimbab 불고기 김밥",
          description: "",
          price: "8",
        },
        {
          name: "K Style Kimbab 김밥",
          description: "Vegetable seaweed roll",
          price: "7",
        },
      ],
    },
    {
      name: "Lunch Boxes and Bowls 도시락",
      items: [
        {
          name: "Spicy Pork Lunch Box 제육볶음",
          description: "",
          price: "13",
        },
        {
          name: "Donkatsu Lunch Box 돈까스",
          description: "",
          price: "13",
        },
      ],
    },
    {
      name: "Appetizers 분식",
      items: [
        {
          name: "Pan Fried Tofu 두부튀김",
          description: "",
          price: "6",
        },
        {
          name: "Ddukbokki 떡볶이",
          description: "Korean style rice cakes",
          price: "7",
        },
      ],
    },
  ];

  const rightColCategories = [
    {
      name: "Rice and Noodles 밥류 면류",
      items: [
        {
          name: "Shrimp Fried Rice 새우 볶음밥",
          description: "",
          price: "10",
        },
      ],
    },
    {
      name: "Korean Stews 찌게류",
      items: [
        {
          name: "Kimchi Stew 김치찌게",
          description: "",
          price: "14",
        },
      ],
    },
  ];
  return (
    <Container>
      <Row className="mb-5">
        <h3>K-Dish</h3>
        <p>Bring Korea home with you</p>
      </Row>
      <Row>
        <Col>
          {leftColCategories.map((category) => (
            <MenuCategory
              name={category.name}
              description={category.description}
              items={category.items}
            />
          ))}
        </Col>
        <Col>
          {rightColCategories.map((category) => (
            <MenuCategory
              name={category.name}
              description={category.description}
              items={category.items}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
