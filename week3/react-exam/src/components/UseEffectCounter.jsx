import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const UseEffectCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}번 `;
    setTimeout(() => {
      console.log(count, "콘솔");
    }, 3000);
  });
  return (
    <StCountWrapper>
      <p>{count}번 함수형</p>
      <button onClick={() => setCount(count + 1)} type="button">
        증가
      </button>
    </StCountWrapper>
  );
};

export default UseEffectCount;

const StCountWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  width: 100%;
  padding: 1rem;

  background-color: lightyellow;

  & > button {
    padding: 1rem;

    font-size: 1.3rem;
    border: none;
    border-radius: 1rem;
    background-color: lightcoral;
  }
`;
