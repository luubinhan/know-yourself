import { motion } from 'motion/react';
import { Home } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { OptionButton } from './OptionButton';
import type { Question, Quiz, QuizOptionKey } from '../../types/quiz';

type QuizScreenProps = {
  activeQuiz: Quiz;
  currentQuestion: Question;
  currentIndex: number;
  progress: number;
  selectedOption: QuizOptionKey | null;
  onBackHome: () => void;
  onOptionSelect: (key: QuizOptionKey) => void;
};

const optionKeys: QuizOptionKey[] = ['A', 'B', 'C'];

export function QuizScreen({
  activeQuiz,
  currentQuestion,
  currentIndex,
  progress,
  selectedOption,
  onBackHome,
  onOptionSelect,
}: QuizScreenProps) {
  return (
    <motion.div
      key="quiz"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen flex flex-col max-w-2xl mx-auto px-6 py-12"
    >
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBackHome} className="p-2 -ml-2 text-slate-500 hover:text-slate-900 transition-colors">
          <Home size={20} />
        </button>
        <div className="text-xs font-mono font-bold tracking-widest text-slate-400">
          CÂU HỎI {currentIndex + 1} / {activeQuiz.questions.length}
        </div>
      </div>

      <ProgressBar progress={progress} />

      <div className="flex-1">
        <motion.h2
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl md:text-3xl font-bold mb-10 leading-tight text-slate-900"
        >
          {currentQuestion.text}
        </motion.h2>

        <div className="space-y-4">
          {optionKeys.map((key) => (
            <OptionButton
              key={key}
              optionKey={key}
              optionText={currentQuestion.options[key].text}
              selectedOption={selectedOption}
              onSelect={onOptionSelect}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
