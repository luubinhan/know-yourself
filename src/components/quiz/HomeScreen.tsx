import { motion } from 'motion/react';
import { Brain } from 'lucide-react';
import { QuizCard } from './QuizCard';
import type { Quiz } from '../../types/quiz';

type HomeScreenProps = {
  quizzes: Quiz[];
  onStartQuiz: (quiz: Quiz) => void;
};

export function HomeScreen({ quizzes, onStartQuiz }: HomeScreenProps) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 py-12 md:py-24"
    >
      <header className="mb-16 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-600/20"
        >
          <Brain size={14} />
          <span>Nền tảng khám phá bản thân</span>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-950"
        >
          Trắc Nghiệm <span className="text-blue-600">Tính Cách</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed"
        >
          Hiểu rõ những tính cách ẩn giấu bên trong bạn qua những bài trắc nghiệm được thiết kế chuyên sâu.
        </motion.p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {quizzes.map((quiz, idx) => (
          <QuizCard key={quiz.id} quiz={quiz} index={idx} onStartQuiz={onStartQuiz} />
        ))}
      </div>
    </motion.div>
  );
}
