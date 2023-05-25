import styled from "styled-components";
import useTodoBreadDispatch from "../lib/hooks/useTodoBreadDispatch";

const BreadCard = (props) => {
  const { content, isDone, id } = props;
  const dispatch = useTodoBreadDispatch();

  const handleToggleDone = () => {
    dispatch({ type: "TOGGLE", id });
  };

  return (
    <St.BreadCardWrapper>
      <p>{content}</p>
      {isDone ? (
        <span
          onClick={handleToggleDone}
          className="material-symbols-outlined fill"
        >
          favorite
        </span>
      ) : (
        <span onClick={handleToggleDone} className="material-symbols-outlined">
          favorite
        </span>
      )}
    </St.BreadCardWrapper>
  );
};

export default BreadCard;
const St = {
  BreadCardWrapper: styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    align-items: center;

    > p {
      ${({ theme }) => theme.fonts.M_Content_2};
    }

    .fill {
      color: ${({ theme }) => theme.colors.purple_2};
    }
    > span {
      cursor: pointer;
    }
  `,
};
