import React, { useState } from "react";
import { useReducer } from "react";
import styled from "styled-components";

const reducerCount = (state, action) => {
  switch (action.type) {
    case "goWebWorkShop":
      return state + 1;
    case "backWebWorkShop":
      return state - 1;
    default:
      throw new Error();
  }
};
const UseReducerCounter = () => {
  const [reducerWebMemberCount, dispatch] = useReducer(reducerCount, 0);
  const [webMemberCount, setWebMemberCount] = useState(0);

  const goWebWorkShop = () => {
    // setWebMemberCount((prev) => prev + 1);
    dispatch({ type: "goWebWorkShop" });
  };
  const backWebWorkShop = () => {
    // setWebMemberCount((prev) => prev - 1);
    dispatch({ type: "backWebWorkShop" });
  };

  return (
    <StCountWrapper>
      {/* <p>웹 워크샵 인원 : {webMemberCount}</p> */}
      <p>웹 워크샵 인원 : {reducerWebMemberCount}</p>
      <nav>
        <button onClick={goWebWorkShop} type="button">
          해삐🌼워크샵 가기!
        </button>
        <button onClick={backWebWorkShop} type="button">
          힝 못가요 워크샵 ㅠㅠㅠ
        </button>
      </nav>
    </StCountWrapper>
  );
};

export default UseReducerCounter;

const StCountWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  padding: 1rem;

  background-color: lightcoral;
  color: white;

  & > nav {
    display: flex;
    gap: 1rem;
    & > button {
      padding: 1rem;

      font-size: 1.3rem;
      border: none;
      border-radius: 1rem;
      background-color: aliceblue;
    }
  }
`;
