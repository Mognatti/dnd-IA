import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/Header";
import { dark } from "./styles/theme";
import useTheme from "../hooks/useTheme";

function App() {
  const [{ theme, setTheme }] = useTheme("theme", dark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header {...{ theme, setTheme }} />
    </ThemeProvider>
  );
}

export default App;
