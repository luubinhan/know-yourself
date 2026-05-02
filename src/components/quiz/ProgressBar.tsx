import { motion } from 'motion/react';

type ProgressBarProps = {
  progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-1.5 w-full bg-slate-200 rounded-full mb-16 overflow-hidden">
      <motion.div
        className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
    </div>
  );
}
