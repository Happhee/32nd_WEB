import { happheeMessage } from "../selector/HappheeInfo";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import styled from "styled-components";
import { useRef } from "react";
import { happheeInfo } from "../atom/HappheeInfo";

const AtomHapphee = () => {
  const [happheeMessageInfo, setHappheeMessage] =
    useRecoilState(happheeMessage);

  const happheeInfoState = useRecoilValue(happheeInfo);
  const setHappheeInfo = useSetRecoilState(happheeInfo);
  const resetHappheeInfo = useResetRecoilState(happheeInfo);
  const inputRef = useRef();

  const { name, hobby, age: MyAge } = happheeInfoState;
  return (
    <St.AtomHappheeWrapper>
      <St.InfoWrapper>
        <p>이름 : {name}</p>
        <p>취미 : {hobby}</p>
        <St.AgeWrapper>
          <p>나이 : {MyAge}</p>
          <button
            type="button"
            onClick={() => {
              const newData = { ...happheeInfoState, age: MyAge + 1 };
              setHappheeInfo(newData);
            }}
          >
            나이증가
          </button>
        </St.AgeWrapper>
      </St.InfoWrapper>
      <St.MessageWrapper>
        {happheeMessageInfo.map((message) => (
          <div key={message}>{message}</div>
        ))}
      </St.MessageWrapper>
      <St.InputWrapper>
        <input type="text" ref={inputRef} />
        <button
          type="button"
          onClick={() => {
            setHappheeMessage(inputRef.current.value);
            inputRef.current.value = "";
          }}
        >
          메세지 추가
        </button>
      </St.InputWrapper>
      <button onClick={() => resetHappheeInfo()}>메세지 초기화</button>
    </St.AtomHappheeWrapper>
  );
};

export default AtomHapphee;

const St = {
  AtomHappheeWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 50%;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.pink_1};
    border-radius: 1rem;

    button {
      ${({ theme }) => theme.fonts.R_SubTitle_1};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.purple_1};
      border: none;
      border-radius: 1rem;

      padding: 1rem;
    }
  `,
  InfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.pink_2};
    border-radius: 1rem;
    p {
      ${({ theme }) => theme.fonts.B_Content_1};
      height: 4rem;
    }
  `,
  AgeWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  MessageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${({ theme }) => theme.fonts.B_Content_1};
  `,
  InputWrapper: styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;
    padding: 2rem;
  `,
};
