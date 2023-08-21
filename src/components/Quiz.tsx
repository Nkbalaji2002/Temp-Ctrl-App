import React, { useEffect, useState } from "react";
import "./styles/Quiz.css";
import { APIResponse, API_URL, Question } from "./data/QuizData";
import axios from "axios";

export const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionsIndex, setCurrentQuestionsIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(API_URL);
      const data: APIResponse = response.data;
      setQuestions(data.results);
    } catch (error) {
      console.error(`Error fetching quiz questions : ${error}`);
    }
  };

  const currentQuestion = questions[currentQuestionsIndex];

  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestionsIndex < questions.length - 1) {
      setCurrentQuestionsIndex(currentQuestionsIndex + 1);
    } else {
      setCurrentQuestionsIndex(questions.length);
    }
  };

  const shuffleArray = (array: string[]) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // reset all
  const handleReset = () => {
    setScore(0);
    setCurrentQuestionsIndex(0);
  };

  return (
    <>
      <div className="app">
        <div className="container">
          {/* first display */}
          {questions.length === 0 ? (
            <>
              <h1>Loading...</h1>
            </>
          ) : (
            // actual quiz started and second display
            <>
              {currentQuestionsIndex < questions.length ? (
                <>
                  <h1>Quiz App</h1>
                  {/* question container start */}
                  <h3 className="question-number">
                    Question {currentQuestionsIndex + 1}
                  </h3>
                  <div className="question">{currentQuestion.question}</div>
                  {/* question container end */}
                  <div className="options">
                    {shuffleArray([
                      ...currentQuestion.incorrect_answers,
                      currentQuestion.correct_answer,
                    ]).map((option, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerClick(option)}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                // result-container
                <>
                  <h1>Quiz Completed!</h1>
                  <p className="score">Your final Score: {score}</p>
                  <button className="result" onClick={() => handleReset()}>
                    Back to Quiz
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
