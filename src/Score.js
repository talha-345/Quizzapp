import React from 'react';

function QuizScore({ score, totalQuestions }) {
  return (
    <div className="quiz-container">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {totalQuestions}</p>
    </div>
  );
}

export default QuizScore;