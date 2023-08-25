import React, { useState } from 'react';
import data from './Data.json'
import QuizScore from './Score';


function Quiz() {
    const [quizState, setQuizState] = useState({
      questions: data,
      currentQuestion: 0,
      score: 0,
      quizCompleted: false,
    });
  
    const handleAnswerClick = (selectedAnswer) => {
      const { questions, currentQuestion, score } = quizState;
      const correctAnswer = questions[currentQuestion].correctAnswer;
  
      const updatedQuizState = {
        ...quizState,
        currentQuestion: currentQuestion + 1,
      };
  
      if (selectedAnswer === correctAnswer) {
        updatedQuizState.score = score + 1;
      }
  
      if (currentQuestion === questions.length - 1) {
        updatedQuizState.quizCompleted = true;
      }
  
      setQuizState(updatedQuizState);
    };
  
    const { questions, currentQuestion, score, quizCompleted } = quizState;
  
    if (quizCompleted) { 
        return (
          <QuizScore score={score} totalQuestions={questions.length} />
        );
    }
    
  
    const question = questions[currentQuestion];
    const options = question.options.map((option, index) => (
      <button
        key={index}
        onClick={() => handleAnswerClick(option)}
        className="answer-button"
      >
        {option}
      </button>
    ));
  
    return (
      <div className="quiz-container">
        <h1>QUIZ APP</h1>
        <p>Question {currentQuestion + 1} of {questions.length}</p>
        <p>Score: {score}</p>
        <h2>{question.question}</h2>
        <div className="options">{options}</div>
        <div className='sign'>Powered by Talha</div>
      </div>
      
    );
  }
  
  export default Quiz;