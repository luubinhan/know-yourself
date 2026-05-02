import { motion } from 'motion/react';
import type { QuizOptionKey } from '../../types/quiz';

type OptionButtonProps = {
  optionKey: QuizOptionKey;
  optionText: string;
  selectedOption: QuizOptionKey | null;
  onSelect: (key: QuizOptionKey) => void;
};

export function OptionButton({ optionKey, optionText, selectedOption, onSelect }: OptionButtonProps) {
  const isSelected = selectedOption === optionKey;

  return (
    <motion.button
      onClick={() => onSelect(optionKey)}
      whileHover={{ x: 8 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full cursor-pointer text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
        isSelected
          ? 'bg-blue-600/10 border-blue-600 text-blue-700 shadow-sm'
          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
      }`}
    >
      <span
        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold ${
          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100'
        }`}
      >
        {optionKey}
      </span>
      <span className="text-[15px] leading-relaxed pt-1">{optionText}</span>
    </motion.button>
  );
}
