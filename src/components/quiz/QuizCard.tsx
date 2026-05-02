import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { Quiz } from '../../types/quiz';

type QuizCardProps = {
  quiz: Quiz;
  index: number;
  onStartQuiz: (quiz: Quiz) => void;
};

export function QuizCard({ quiz, index, onStartQuiz }: QuizCardProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.1 }}
      onClick={() => onStartQuiz(quiz)}
      className="group cursor-pointer p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-600/40 hover:bg-white hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <quiz.icon size={120} />
      </div>
      <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
        <quiz.icon size={28} />
      </div>
      <h2 className="text-2xl font-bold mb-3 text-slate-900">{quiz.title}</h2>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{quiz.tagline}</p>
      <div className="flex items-center text-blue-600 text-sm font-semibold gap-1">
        Bắt đầu ngay <ArrowRight size={16} />
      </div>
    </motion.div>
  );
}
