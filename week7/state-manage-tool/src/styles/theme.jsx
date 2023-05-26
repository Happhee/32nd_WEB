import { css } from "styled-components";
const colors = {
  white: "#FFFFFF",
  black: "#000000",
  skyBlue_1: "#C0DBEA",
  pink_1: "#E8A0BF",
  pink_2: "#FDF4F5",
  purple_1: "#917FB3",
  purple_2: "#BA90C6",
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
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6rem;
    letter-spacing: -0.05rem;
  `,
  B_Title_3: css`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3.3rem;
    letter-spacing: -0.05rem;
  `,
  M_Title_1: css`
    font-style: normal;
    font-weight: 500;
    font-size: 4rem;
    line-height: 3.6rem;
    letter-spacing: -0.05rem;
  `,
  M_SubTitle_1: css`
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  R_SubTitle_1: css`
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  R_SubTitle_2: css`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  B_Content_1: css`
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
  M_Content_2: css`
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
  R_Content_3: css`
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
