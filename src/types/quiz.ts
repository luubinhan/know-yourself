import type { LucideIcon } from 'lucide-react';

export type QuizOptionKey = 'A' | 'B' | 'C';

export interface Option {
  text: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  options: Record<QuizOptionKey, Option>;
}

export interface ResultGroup {
  min: number;
  max: number;
  title: string;
  description: string;
  strengths: string[];
  tips: string;
}

export interface Quiz {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  questions: Question[];
  results: ResultGroup[];
}

export type Screen = 'home' | 'quiz' | 'result';
