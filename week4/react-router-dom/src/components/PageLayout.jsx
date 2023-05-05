import styled from "styled-components";
import Header from "./Header";

const PageLayout = (props) => {
  const { children } = props;

  return (
    <St.PageWrapper>
      <Header />
      {children}
    </St.PageWrapper>
  );
};

export default PageLayout;

const St = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.Sopt_Web_Color_Sky_4};
  `,
};
