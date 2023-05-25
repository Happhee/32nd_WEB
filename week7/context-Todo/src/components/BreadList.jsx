import styled from "styled-components";
import useTodoBreadState from "../lib/hooks/useTodoBreadState";
import BreadCard from "./BreadCard";

const BreadList = () => {
  const state = useTodoBreadState();
  return (
    <St.BreadListWrapper>
      {state.map((data) => (
        <BreadCard
          content={data.content}
          isDone={data.isDone}
          key={data.id}
          id={data.id}
        />
      ))}
    </St.BreadListWrapper>
  );
};

export default BreadList;

const St = {
  BreadListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    width: 70%;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.pink_2};
    border-radius: 1rem;
  `,
};
