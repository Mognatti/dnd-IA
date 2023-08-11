import { DefaultTheme } from "styled-components";

export interface HeaderProps {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export interface SidebarProps {
  showSidebar: boolean;
  theme: DefaultTheme;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}
