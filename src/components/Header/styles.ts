import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { GiAncientSword, GiHamburgerMenu } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
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

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 2vh;
  background-color: ${(props) =>
    props.active ? `${props.theme.colors.action}` : "tranparent"};
  border-radius: 8px;
  padding: 8px;
`;

export const SidebarNav = styled(Nav)`
  display: flex;
  gap: 2vh;
  margin-left: 2vh;
`;

export const AuthDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 60px;
  right: 50px;
  width: fit-content;
`;

export const LogoutContainer = styled.div`
  cursor: pointer;
`;

export const LogoutIcon = styled(BiLogOutCircle)``;

export const LoginLink = styled(Link)`
  display: block;
  text-align: center;
  color: ${(props) => props.theme.colors.action};
  text-decoration: none;
  padding: 0;
  border-bottom: 1px solid;
  &:hover {
    padding: 0 5px;
  }
`;
