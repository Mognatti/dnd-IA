import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import * as S from "../styles";
import { dark, light } from "../../../styles/theme";
import { SidebarProps } from "../../../types";

export default function Sidebar({
  showSidebar,
  setShowSidebar,
  theme,
  setTheme,
}: SidebarProps) {
  return (
    <Offcanvas
      placement="end"
      show={showSidebar}
      onHide={() => setShowSidebar(false)}
      scroll
      backdrop={false}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <S.PageIcon /> DnD Buddy
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav>
          <Form.Switch
            id="theme-switch"
            label={theme.title}
            checked={theme.title === "light"}
            onChange={() => setTheme(theme === dark ? light : dark)}
          />
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Teste</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
