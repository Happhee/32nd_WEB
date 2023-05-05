import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <St.HeaderWrapper>
      <h1 onClick={() => navigate("/")}>🌼해삐 웹팟 추억 보관함🌼</h1>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Purple};

    & > h1 {
      ${({ theme }) => theme.fonts.B_Title_1};
      color: ${({ theme }) => theme.colors.Sopt_White};
      cursor: pointer;
    }
    & > h2 {
      padding: 1rem;

      ${({ theme }) => theme.fonts.B_Title_3};
      background-color: ${({ theme }) => theme.colors.Sopt_White};
      border-radius: 1rem;

      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.colors.Sopt_White};
        background-color: ${({ theme }) => theme.colors.Sopt_Black};
      }
    }
  `,
};
