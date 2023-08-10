import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { light } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
