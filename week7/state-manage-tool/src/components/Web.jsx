import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Happhee from "./Happhee";

const Web = () => {
  const dispatch = useDispatch();
  const { webPartCount, name } = useSelector((state) => state.webInfo);

  const handleRename = (value) => {
    dispatch({ type: "RENAME_PART", payload: value });
  };
  const handleWebPart = () => {
    dispatch({ type: "ADD_WEB_PART" });
  };
  return (
    <St.WebWrapper>
      <header>
        <h1>이름 : {name}</h1>
      </header>
      <Happhee setName={handleRename} />

      <St.ButtonWrapper>
        <St.WebPartP>웨비들 : {webPartCount}명</St.WebPartP>
        <button type="button" onClick={handleWebPart}>
          추가
        </button>
      </St.ButtonWrapper>
    </St.WebWrapper>
  );
};

export default Web;

const St = {
  WebWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 50%;
    padding: 3rem;

    background-color: ${({ theme }) => theme.colors.pink_1};
    border-radius: 1rem;

    h1 {
      ${({ theme }) => theme.fonts.B_Title_1};
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  WebPartP: styled.p`
    ${({ theme }) => theme.fonts.R_Content_3};
  `,
};
