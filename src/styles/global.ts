import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;700&display=swap");

:root {
  font-family: Cormorant, serif, Times New Roman, Times, serif;
  line-height: 1.5;
  font-weight: 500;
}

body {
  margin: 0;
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 1.2em;
  min-width: 320px;
  min-height: 100vh;
}


a {
  font-weight: 500;
  color: #646cff;
  text-decoration: none;
}
a:hover {
  color: #535bf2;
}

`;
