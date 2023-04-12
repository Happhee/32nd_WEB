import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const HappheeTitle = (props) => {
  const { title, subTitle } = props;

  useEffect(() => {
    document.title = `${title}`;
  });

  return (
    <StHeader>
      <h1 className="Title__Haphee">{title}</h1>
      <h2>{subTitle}</h2>
    </StHeader>
  );
};

export default HappheeTitle;

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  color: white;
  background-color: #539ff6;

  font-size: 1rem;
`;
