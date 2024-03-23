import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import MenuTab from "./MenuTab";

export default function MenusPage() {
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

  const tabContainerStyle = {
    width: "980px",
  };
  return (
    <Container style={tabContainerStyle} className="mx-auto my-5">
      <Tab.Container defaultActiveKey="first">
        <Nav variant="underline" className="justify-content-end">
          <Nav.Item>
            <Nav.Link eventKey="first">K-Dish</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Sushi</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <MenuTab
              name="K-Dish"
              description="Bring Korea home with you"
              leftColCategories={leftColCategories}
              rightColCategories={rightColCategories}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <h1>2nd tab</h1>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
