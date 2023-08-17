import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import * as S from "../styles";
import { dark, light } from "../../../styles/theme";
import { SidebarProps } from "../../../types";
import { navLinks } from "./navLinks";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import useFirebaseAuth from "../../../../hooks/useFirebaseAuth";

export default function Sidebar({
  showSidebar,
  setShowSidebar,
  theme,
  setTheme,
}: SidebarProps) {
  const location = useLocation();
  const path = location.pathname;
  const user = useContext(UserContext);
  const [{ logout }] = useFirebaseAuth();

  function checkActive(linkTo: string) {
    return path.includes(linkTo);
  }

  function handleClick() {
    logout();
    document.location.reload();
  }

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
        <S.SidebarNav className="d-flex">
          <Form.Switch
            id="theme-switch"
            label={theme.title}
            checked={theme.title === "light"}
            onChange={() => setTheme(theme === dark ? light : dark)}
          />
          {navLinks.map((link) => (
            <S.SidebarLink
              to={link.to}
              key={link.id}
              active={checkActive(link.to)}
            >
              {link.name}
            </S.SidebarLink>
          ))}
        </S.SidebarNav>
        <S.AuthDiv>
          {user ? (
            <div>
              <S.LogoutContainer onClick={() => handleClick()}>
                <S.LoginLink to={"/"}>Sair</S.LoginLink>
              </S.LogoutContainer>
            </div>
          ) : (
            <S.LogoutContainer>
              <S.LoginLink to={"/auth"} onClick={() => setShowSidebar(false)}>
                Entrar
              </S.LoginLink>
            </S.LogoutContainer>
          )}
        </S.AuthDiv>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
