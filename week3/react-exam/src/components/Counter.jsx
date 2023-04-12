import React, { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAlertClick = () => {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  };
  return (
    <StCountWrapper>
      <p>{count}번 핸들러</p>
      <button onClick={() => setCount(count + 1)} type="button">
        증가
      </button>
      <button onClick={handleAlertClick} type="button">
        Alert 창 띄우기
      </button>
    </StCountWrapper>
  );
};

export default Counter;

const StCountWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  width: 100%;
  padding: 1rem;

  background-color: lightcoral;
  color: white;

  & > button {
    padding: 1rem;

    font-size: 1.3rem;
    border: none;
    border-radius: 1rem;
    background-color: aliceblue;
  }
`;
