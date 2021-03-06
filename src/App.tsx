import React, { useState, useEffect, useRef } from "react";

import QuestionCard from "./Components/QuestionCard";
import StartForm from "./Components/StartForm";
import { fetchQuizQuestions } from "./API";
import { QuestionState, Difficulty } from "./API";

import { GlobalStyle, Wrapper, SelectContainer } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async (difficulty: Difficulty) => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty as Difficulty
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const correctAnswer = questions[number].correct_answer;
    const correct = correctAnswer === e.currentTarget.innerText;

    if (correct) setScore((prev: any) => prev + 1);

    const answerObject: AnswerObject = {
      question: questions[number].question,
      answer: e.currentTarget.innerText,
      correct: correct,
      correctAnswer: correctAnswer,
    };
    setUserAnswers((prev: any) => [...prev, answerObject]);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  useEffect(() => {
    number === TOTAL_QUESTIONS && setGameOver(true);
  }, [number]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div>
          <h1> Cartoon quiz</h1>
          <StartForm
            condition={gameOver || userAnswers.length === TOTAL_QUESTIONS}
            startTrivia={startTrivia}
          />

          {!gameOver ? <p className="score">Score: {score}</p> : null}

          {loading ? <p>Loading questions...</p> : null}
          {!loading && !gameOver && number !== TOTAL_QUESTIONS && (
            <QuestionCard
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next &#8658;
            </button>
          ) : null}
        </div>
      </Wrapper>
    </>
  );
};

export default App;
