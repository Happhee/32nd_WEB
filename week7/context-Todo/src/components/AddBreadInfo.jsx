import { useRef } from "react";
import styled from "styled-components";
import useTodoBreadDispatch from "../lib/hooks/useTodoBreadDispatch";

const AddBreadInfo = () => {
  const dispatch = useTodoBreadDispatch();
  const inputRef = useRef(null);

  return (
    <St.BreadAddBtnWrapper>
      <input ref={inputRef} type="input" />
      <St.BreadAddBtn
        onClick={() => {
          dispatch({ type: "CREATE", todoBread: inputRef.current.value });
          inputRef.current.value = "";
        }}
      >
        추가
      </St.BreadAddBtn>
    </St.BreadAddBtnWrapper>
  );
};

export default AddBreadInfo;

const St = {
  BreadAddBtnWrapper: styled.div`
    display: flex;
  `,
  BreadAddBtn: styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.skyBlue_1};
  `,
};
