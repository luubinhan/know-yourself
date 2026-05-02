import { motion } from 'motion/react';
import { RotateCcw, CheckCircle2, Trophy, TrendingUp, Layout } from 'lucide-react';
import type { ResultGroup } from '../../types/quiz';

type ResultScreenProps = {
  score: number;
  quizResult: ResultGroup;
  onBackHome: () => void;
  onRetry: () => void;
};

export function ResultScreen({ score, quizResult, onBackHome, onRetry }: ResultScreenProps) {
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-2xl mx-auto px-6 py-12 md:py-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex p-4 rounded-3xl bg-blue-600/10 text-blue-600 mb-8 border border-blue-600/20">
          <Trophy size={48} />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">ĐÃ HOÀN THÀNH</h2>
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tight text-slate-900">KẾT QUẢ</h1>
        <div className="text-blue-600 font-mono text-xl font-bold bg-blue-600/5 inline-block px-4 py-1 rounded-full border border-blue-600/10">
          {score} / 50 ĐIỂM
        </div>
      </div>

      <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl space-y-12 mb-12">
        <section>
          <h3 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <Layout size={14} /> Phân loại của bạn
          </h3>
          <h4 className="text-3xl md:text-4xl font-serif italic text-slate-900 font-bold mb-6">{quizResult.title}</h4>
          <p className="text-slate-600 text-lg leading-relaxed italic border-l-2 border-blue-600 pl-6">"{quizResult.description}"</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <CheckCircle2 size={14} /> Điểm mạnh vượt trội
            </h3>
            <div className="flex flex-wrap gap-3">
              {quizResult.strengths.map((strength, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <TrendingUp size={14} /> Gợi ý định hướng
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">{quizResult.tips}</p>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={onBackHome}
          className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-600/20"
        >
          Quay về Trang chủ
        </button>
        <button
          onClick={onRetry}
          className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all group shadow-sm"
        >
          Thử lại bài này <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>
    </motion.div>
  );
}
