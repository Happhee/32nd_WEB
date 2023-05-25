import { styled } from "styled-components";
const Header = () => {
  return (
    <St.HeaderWrapper>
      <h1>🍞 어떤 빵을 만들까 🍞</h1>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.div`
    ${({ theme }) => theme.fonts.B_Title_1};
    color: ${({ theme }) => theme.colors.white};
  `,
};
