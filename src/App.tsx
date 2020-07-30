import React from 'react';

import QuestionCard from  './Components/QuestionCard'

const App = () =>{
  const startTrivia = async () =>{
    
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }
  const nextQuestion = () =>{
    
  }

  return (
    <div>
      <h1> Cartoon quiz</h1>
      <button className="start" onClick={startTrivia}></button>
      <p className="score">Score:</p>
      <p>Loading questions</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
