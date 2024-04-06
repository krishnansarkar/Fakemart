import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import MenuTab from "./MenuTab";
import { useOutletContext } from "react-router-dom";

export default function MenusPage(props) {
  const cart = useOutletContext();
  const kdishcategories = {
    leftCol: [
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
    ],
    rightCol: [
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
    ],
  };

  const shushicategories = {
    leftCol: [
      {
        name: "Rolls",
        description: "",
        items: [
          {
            name: "House Roll",
            description:
              "Five of each of our most popular rolls: Tuna, Salmon and California.",
            price: "13.50",
          },
          {
            name: "Tri Volcano Roll",
            description: "",
            price: "15",
          },
        ],
      },
    ],
    rightCol: [
      {
        name: "Sushi and Sashimi",
        items: [
          {
            name: "Tuna Sashimi",
            description: "",
            price: "10",
          },
        ],
      },
      {
        name: "Meals and Combos",
        items: [
          {
            name: "Hwedupbab",
            description:
              "Raw fish and assorted vegetables served over rice. Korean style.",
            price: "16",
          },
        ],
      },
      {
        name: "Appetizer",
        items: [
          {
            name: "Inari (Seasoned Tofu)",
            description: "",
            price: "10.50",
          },
        ],
      },
    ],
  };

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
              leftColCategories={kdishcategories.leftCol}
              rightColCategories={kdishcategories.rightCol}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <MenuTab
              name="Sushi"
              description="Fresh sushi every day from Sushi Avocado"
              leftColCategories={shushicategories.leftCol}
              rightColCategories={shushicategories.rightCol}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
