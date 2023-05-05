import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ImgCard = (props) => {
  const { imgSrc, name, id } = props;
  const navigate = useNavigate();

  return (
    <St.ImgWrapper onClick={() => navigate(`/gallery/${id}`)}>
      <St.Img src={new URL(imgSrc, import.meta.url).href} alt={name} />
      <p>{name}</p>
    </St.ImgWrapper>
    // <St.ImgWrapper>
    //   <St.Img src={new URL(imgSrc, import.meta.url).href} alt={name} />
    //   <Link to={`../gallery/${id}`}>{name}</Link>
    // </St.ImgWrapper>
  );
};

export default ImgCard;

const St = {
  ImgWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Light_Yellow};
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.Sopt_Pink};

    cursor: pointer;
    p {
      ${({ theme }) => theme.fonts.M_Content_2};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.Sopt_Pink};
      box-shadow: 0.3rem 0.3rem 0.3rem
        ${({ theme }) => theme.colors.Sopt_Light_Yellow};
      color: ${({ theme }) => theme.colors.Sopt_Coral};
    }
  `,
  Img: styled.img`
    width: 40rem;
    height: 30rem;

    border-radius: 1rem;

    object-fit: contain;
  `,
};
