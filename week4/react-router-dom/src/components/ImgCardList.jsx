import styled from "styled-components";
import { IMG_LIST } from "../assets";

import ImgCard from "./ImgCard";

const ImgCardList = () => {
  return (
    <St.CardListWrapper>
      {IMG_LIST.map(({ imgSrc, id, name }) => (
        <ImgCard imgSrc={imgSrc} id={id} name={name} key={id} />
      ))}
    </St.CardListWrapper>
  );
};

export default ImgCardList;

const St = {
  CardListWrapper: styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Blue};
  `,
};
