import Navbar from "react-bootstrap/Navbar";
import { GiAncientSword, GiHamburgerMenu } from "react-icons/gi";
import { styled } from "styled-components";

export const PageIcon = styled(GiAncientSword)``;

export const StyledNavbar = styled(Navbar)`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const NavbarTitle = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
`;

export const ToggleOffset = styled(Navbar.Toggle)``;

export const HambuerguerIcon = styled(GiHamburgerMenu)``;
