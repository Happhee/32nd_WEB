import Counter from "./components/Counter";
import styled from "styled-components";
import UseEffectCount from "./components/UseEffectCounter";
import ClassUseEffectCounter from "./components/ClassUseEffectCounter";
import HappheeTitle from "./components/HappheeTitle";
import UseReducerCounter from "./components/UseReducerCounter";
import UseMemoWeb from "./components/UseMemoWeb";

function App() {
  return (
    <StAppWrapper>
      {/* <HappheeTitle title={"💛 햅히1 💛"} subTitle={"✨ 긍정긍정에너지 ✨"} />
      <HappheeTitle title={"💛 햅히2 💛"} subTitle={"✨ 긍정긍정에너지 ✨"} />
      <Counter />
      <UseEffectCount />
      <ClassUseEffectCounter /> */}

      {/* <UseReducerCounter /> */}
      <UseMemoWeb />
    </StAppWrapper>
  );
}

export default App;

const StAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
  font-family: "KCC-Ganpan";
  font-size: 2rem;
`;
