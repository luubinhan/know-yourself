import { managerLeaderQuiz } from './quizzes/manager-leader';
import { introExtroQuiz } from './quizzes/index';
import type { Quiz } from '../types/quiz';

export const QUIZZES: Quiz[] = [
  managerLeaderQuiz,
  introExtroQuiz
];
