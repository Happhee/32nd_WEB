import { useRef } from "react";
import { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
const UseMemoWeb = () => {
  const [number, setNumber] = useState(24);
  const [isAllParticipant, setIsAllParticipant] = useState(true);
  const useEffectRef = useRef("");

  // 1번 location
  const workShop = {
    type: isAllParticipant ? "🌼 해삐충전 100%🌼" : "😭 아쉬워요 😭",
  };

  // 2번 location
  //   const workShop = useMemo(() => {
  //     return {
  //       type: isAllParticipant ? "🌼 해삐충전 100%🌼" : "😭 아쉬워요 😭",
  //     };
  //   }, [isAllParticipant]);

  useEffect(() => {
    console.log("useEffect 호출!");
    if (number !== 24) useEffectRef.current = "useEffect 호출!";
  }, [workShop]);

  return (
    <StUseMemoWrapper>
      <header>
        <h1>해삐 2차 워크샵 결과</h1>
      </header>
      <section>
        <article>
          <header>
            <h2>웹파트 2차 워크샵 몇명가요?!</h2>
          </header>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </article>
        <article>
          <header>
            <h2>참석할 수 있어요!</h2>
          </header>
          <p> {workShop.type}</p>
          <button onClick={() => setIsAllParticipant(!isAllParticipant)}>
            저요!!!
          </button>
        </article>
      </section>
      <p>{useEffectRef.current}</p>
    </StUseMemoWrapper>
  );
};

export default UseMemoWeb;

const StUseMemoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  height: 100vh;

  background-color: #f8feb1;

  & > header {
    width: 100%;
    text-align: center;

    color: #f8feb1;
    background-color: #c1c4ff;
  }
  & > section {
    display: flex;
    justify-content: center;
    gap: 1rem;

    & > article {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 1rem 4rem;

      color: white;
      background-color: #d1abeb;

      border-radius: 1rem;
    }
  }
  input,
  button {
    padding: 1rem;

    font-size: 1.3rem;

    background-color: white;
    border: none;
    border-radius: 1rem;
  }
`;
