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
      <StyledHappheeButton type="button">햅히 스타일드</StyledHappheeButton>
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
          background-color: ${({ theme }) => theme.colors.lightPink};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.lightPurple};
          color: ${({ theme }) => theme.colors.purple};
        `};
`;

const HappheeButton = styled(StyledButton)`
  width: 70%;

  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledHappheeButton = styled.button`
  width: 70%;

  border: none;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.lightPink};
  color: ${(props) => props.theme.colors.black};

  &:hover {
    transform: scale(1.1);
  }
`;
