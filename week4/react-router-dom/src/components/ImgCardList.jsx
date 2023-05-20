import styled from "styled-components";
import { IMG_LIST } from "../assets";

import { useState } from "react";
import ImgCard from "./ImgCard";
import { webClient, useEffect } from "../lib/webClient";

const ImgCardList = () => {
  const [imgcardlist, setImgCardList] = useState([]);

  const getImgCardList = async () => {
    const { data, status } = await webClient.get("/web-gallery");
    console.log(data.data);
    if (status === 200) setImgCardList([...data.data]);
  };
  useEffect(() => {
    getImgCardList();
  }, []);
  return (
    <St.CardListWrapper>
      {imgcardlist.map(({ imgSrc, id, name }) => (
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
