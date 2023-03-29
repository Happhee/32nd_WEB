import styled, { ThemeProvider } from "styled-components";
import { Button, Header } from "./components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Button />
    </ThemeProvider>
  );
};

export default App;

const AppWrapper = styled.div`
  display: flex;

  width: 50rem;
  margin: 0 auto;

  background-color: red;
  @media (max-width: 50rem) {
    width: 30rem;
    background-color: yellow;
  }
  @media (max-width: 30rem) {
    width: 100%;
    background-color: green;
  }
`;
