import React, { Component } from "react";
import styled from "styled-components";
class ClassUseEffectCounter extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    setTimeout(() => {
      console.log(`${this.state.count} 클래스`);
    }, 3000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`${this.state.count} 클래스`);
    }, 3000);
  }
  render() {
    return (
      <StCountWrapper>
        <p>{this.state.count} 번 클래스</p>
        <button
          type="button"
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          증가
        </button>
      </StCountWrapper>
    );
  }
}
export default ClassUseEffectCounter;

const StCountWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  width: 100%;
  padding: 1rem;

  background-color: lavender;

  & > button {
    padding: 1rem;

    font-size: 1.3rem;
    color: white;
    border: none;
    border-radius: 1rem;
    background-color: #5a21df;
  }
`;
