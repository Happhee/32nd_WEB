import styled from "styled-components";
import { Button, Header } from "./components";
import GlobalStyle from "./styles/globalStyleds";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Button />
    </AppWrapper>
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
