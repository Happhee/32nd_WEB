import Web from "./components/Web";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";
import AtomHapphee from "./components/AtomHapphee";

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Web /> */}
        <AtomHapphee />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
