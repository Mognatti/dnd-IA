import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  line-height: 1.5;

}

body {
  margin: 0;
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2em;
  min-width: 320px;
  min-height: 100vh;
  width:100vw;
  height: 100vh;
}

ul,ol,li{
list-style: none;
padding: 0;
margin: 0;
}

a {
  font-weight: 500;
  color: ${(props) => props.theme.colors.action};
  text-decoration: none;
  transition:all 350ms linear;
  
}
a:hover {
  opacity: 0.7;
}

`;
