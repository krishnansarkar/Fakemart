import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Tab, Nav } from "react-bootstrap";
import MenuTab from "./MenuTab";

export default function MenusPage(props) {
  var [menus, setMenus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_BACKEND_SERVER_URL + "/api/menus"
        );
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  const tabContainerStyle = {
    maxWidth: "980px",
  };
  return (
    <Container style={tabContainerStyle} className="mx-auto my-5">
      <Tab.Container defaultActiveKey={0}>
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
