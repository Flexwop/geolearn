import React, { useState } from 'react';
import { PlusCircle, Save, X } from 'lucide-react';
import type { Question } from '../types';

export default function QuizBuilder() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: crypto.randomUUID(),
      text: '',
      type: 'multiple-choice',
      options: ['', '', '', ''],
      correctAnswer: '',
      points: 10,
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, ...updates } : q
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-6">Create New Quiz</h1>
        
        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quiz Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quiz title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Enter quiz description"
            />
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={question.id} className="border rounded-lg p-4 relative">
              <button
                onClick={() => removeQuestion(question.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              >
                <X size={20} />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Question {index + 1}</span>
                  <select
                    value={question.type}
                    onChange={(e) => updateQuestion(question.id, { type: e.target.value as Question['type'] })}
                    className="px-3 py-1 border rounded-md"
                  >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="text">Text Answer</option>
                    <option value="true-false">True/False</option>
                  </select>
                </div>

                <input
                  type="text"
                  value={question.text}
                  onChange={(e) => updateQuestion(question.id, { text: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter question text"
                />

                {question.type === 'multiple-choice' && (
                  <div className="space-y-2">
                    {question.options?.map((option, optionIndex) => (
                      <input
                        key={optionIndex}
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...(question.options || [])];
                          newOptions[optionIndex] = e.target.value;
                          updateQuestion(question.id, { options: newOptions });
                        }}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder={`Option ${optionIndex + 1}`}
                      />
                    ))}
                  </div>
                )}

                <input
                  type="text"
                  value={question.correctAnswer as string}
                  onChange={(e) => updateQuestion(question.id, { correctAnswer: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Correct answer"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={addQuestion}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <PlusCircle size={20} />
            Add Question
          </button>
          
          <button
            onClick={() => console.log({ title, description, questions })}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <Save size={20} />
            Save Quiz
          </button>
        </div>
      </div>
    </div>
  );
}