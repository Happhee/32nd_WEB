import { useState } from "react";
import styled, { css } from "styled-components";

const Button = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <StyledButton
        type="button"
        isClick={isClick}
        onClick={() => setIsClick((prev) => !prev)}
      >
        웹파트MT 참여하기
      </StyledButton>
      <HappheeButton type="button">햅히도 갈래💖</HappheeButton>
    </>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 50%;
  margin: 1rem;
  padding: 1rem;

  border: none;
  border-radius: 1rem;
  ${(props) =>
    props.isClick
      ? css`
          background-color: #bface2;
          color: white;
        `
      : css`
          background-color: #ffd4d4;
          color: #674188;
        `};
`;

const HappheeButton = styled(StyledButton)`
  width: 70%;

  background-color: #c0deff;
  color: black;
  &:hover {
    transform: scale(1.1);
  }
`;
