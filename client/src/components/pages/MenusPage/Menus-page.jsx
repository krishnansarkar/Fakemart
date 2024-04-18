import { Container, Tab, Nav } from "react-bootstrap";
import MenuTab from "./MenuTab";
import menus from "../../baked-data/menus";

export default function MenusPage(props) {
  const tabContainerStyle = {
    maxWidth: "980px",
  };
  return (
    <Container style={tabContainerStyle} className="mx-auto my-5">
      <Tab.Container defaultActiveKey={1}>
        <Nav variant="underline" className="justify-content-end">
          {menus.map((menu, index) => (
            <Nav.Item>
              <Nav.Link eventKey={index}>{menu.name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          {menus.map((menu, index) => (
            <Tab.Pane eventKey={index}>
              <MenuTab
                name={menu.name}
                description={menu.description}
                leftColCategories={menu.leftCol}
                rightColCategories={menu.rightCol}
              />
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
