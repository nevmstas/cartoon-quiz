import styled, { createGlobalStyle } from "styled-components";
import BGImg from "./images/bg2.png";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;       
    }
    body{
        background-image:url(${BGImg});
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content:center;
    }
    *{
        box-sizing:border-box;
        font-family: "Comic Sans MS", "Comic Sans", cursive;
    }
`;

export const Wrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  padding: 5rem;
  min-width: 20rem;
  max-width: 60rem;
  flex-direction: column;
  align-items: center;
  border: 1px black;
  border-radius: 3px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  background: white;
  text-align: center;

  outline-style: none;

  > p {
    color: "white";
  }

  h1 {
    background-image: linear-gradient(
      to right,
      rgba(252, 3, 40),
      rgba(255, 105, 180)
    );
    text-transform: uppercase;
    -webkit-background-clip: text;
    color: transparent;
  }

  .score {
    color: "white";
    font-size: "2rem";
    margin: 0;
  }

  .start,
  .next {
    cursor: pointer;

    padding: 5px 40px;

    box-shadow: 0px 5px 10px rgba(255, 105, 180, 0.25);
    color: white;
    transition: all 0.2s;
    background-color: hotpink;

    &:hover {
      transform: scale(1.1);
    }
  }
  .start {
    padding: 10px 80px;
    border-radius: 30px;
    font-size: 30px;
    border: none;
    margin-bottom: 3rem;
  }
  .next {
    margin-top: 5rem;
    border: none;
    border-radius: 20px;
  }
`;

export const AnswersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type ButtonProps = {
  correct: boolean;
  userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonProps>`
  button {
    margin-top: 20px;
    padding: 5px 30px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    color: white;
    transition: all 0.3s;
    margin-right: 1rem;
    font-size: 15px;
    cursor: pointer;

    background-color: hotpink;

    &:hover {
      background-color: rgba(255, 59, 157);
      transform: scale(1.1) rotate(5deg);

      /* background-image: linear-gradient(to right, rgba(252, 3, 40) , rgba(255, 105, 180));    */
    }

    &:disabled {
      background-color: ${({ correct, userClicked }) =>
        correct
          ? "lightgreen"
          : !correct && userClicked
          ? "#ff5b4f"
          : "lightgray"};
      color: ${({ correct, userClicked }) =>
        correct ? "black" : !correct && userClicked ? "white" : "grey"};
    }
  }
`;
