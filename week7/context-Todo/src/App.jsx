import { ThemeProvider } from "styled-components";
import Router from "./Router";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
