import { Container } from "react-bootstrap";
import { HeaderProps } from "../../types";
import { useState } from "react";
import * as S from "./styles";
import Sidebar from "./components/Sidebar";

export default function Header({ theme, setTheme }: HeaderProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <S.StyledNavbar expand="lg">
      <Container>
        <S.HeaderLink to="/">
          <S.PageIcon />
          DnD Buddy
        </S.HeaderLink>
        <S.ToggleOffset
          onClick={() => setShowSidebar(!showSidebar)}
          className="d-block"
        >
          <S.HambuerguerIcon />
        </S.ToggleOffset>
        <Sidebar {...{ theme, showSidebar, setTheme, setShowSidebar }} />
      </Container>
    </S.StyledNavbar>
  );
}
