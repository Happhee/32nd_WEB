import { css } from "styled-components";

const colors = {
  Sopt_Purple: "#ADA2FF",
  Sopt_Blue: "#C0DEFF",
  Sopt_Pink: "#FFE5F1",
  Sopt_Light_Yellow: "#FFF8E1",
  Sopt_Coral: "#FF8787",
  Sopt_White: "#FFFFFF",
  Sopt_Black: "#000000",
};

const fonts = {
  B_Title_1: css`
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 4.1rem;
    letter-spacing: -0.05rem;
  `,
  B_Title_2: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6rem;
    letter-spacing: -0.05rem;
  `,
  B_Title_3: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3.3rem;
    letter-spacing: -0.05rem;
  `,
  M_Title_1: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 500;
    font-size: 4rem;
    line-height: 3.6rem;
    letter-spacing: -0.05rem;
  `,
  M_SubTitle_1: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  R_SubTitle_1: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  R_SubTitle_2: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  B_Content_1: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
  M_Content_2: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
  R_Content_3: css`
    font-family: "TmoneyRoundWindExtraBold";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
};

const theme = {
  colors,
  fonts,
};
export default theme;
