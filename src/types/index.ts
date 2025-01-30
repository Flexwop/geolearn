export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'text' | 'true-false';
  options?: string[];
  correctAnswer: string | boolean;
  timeLimit?: number;
  points: number;
  mediaUrl?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  author: string;
  questions: Question[];
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: Date;
  timesPlayed: number;
  averageRating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdQuizzes: Quiz[];
  playedQuizzes: {
    quizId: string;
    score: number;
    completedAt: Date;
  }[];
}