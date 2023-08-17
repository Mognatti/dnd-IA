import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import useTheme from "../hooks/useTheme";
import { dark } from "./styles/theme";
import { ThemeProvider, styled } from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/global";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { Spinner } from "react-bootstrap";
import { UserProvider } from "./context/userContext";
import Spells from "./pages/Spells";

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export default function AppRoutes() {
  const [{ theme, setTheme }] = useTheme("theme", dark);
  const [{ isLoading }] = useFirebaseAuth();

  if (isLoading)
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      </ThemeProvider>
    );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <UserProvider>
          <Header {...{ theme, setTheme }} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/spells" element={<Spells />}></Route>
            <Route path="/profile" element={<Home />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/*" element={<Home />}></Route>
          </Routes>
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}
