import React, { useState, useEffect } from 'react';
import type { Quiz, Question } from '../types';

interface Props {
  quiz: Quiz;
  onComplete: (score: number) => void;
}

export default function QuizGame({ quiz, onComplete }: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + currentQuestion.points);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setTimeLeft(30);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{quiz.title}</h2>
          <div className="text-lg font-medium">
            Question {currentQuestionIndex + 1}/{quiz.questions.length}
          </div>
        </div>

        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-1000"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
          <div className="text-right text-sm text-gray-600 mt-1">
            {timeLeft} seconds left
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl mb-4">{currentQuestion.text}</h3>
          
          {currentQuestion.type === 'multiple-choice' && (
            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(option)}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    selectedAnswer === option
                      ? 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'true-false' && (
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedAnswer('true')}
                className={`flex-1 p-4 rounded-lg border ${
                  selectedAnswer === 'true' ? 'bg-blue-100 border-blue-500' : ''
                }`}
              >
                True
              </button>
              <button
                onClick={() => setSelectedAnswer('false')}
                className={`flex-1 p-4 rounded-lg border ${
                  selectedAnswer === 'false' ? 'bg-blue-100 border-blue-500' : ''
                }`}
              >
                False
              </button>
            </div>
          )}

          {currentQuestion.type === 'text' && (
            <input
              type="text"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="w-full p-4 border rounded-lg"
              placeholder="Type your answer..."
            />
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-lg">
            Score: <span className="font-bold">{score}</span>
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}