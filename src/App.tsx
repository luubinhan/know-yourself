import { useMemo, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { QUIZZES } from './data/quizzes';
import { HomeScreen } from './components/quiz/HomeScreen';
import { QuizScreen } from './components/quiz/QuizScreen';
import { ResultScreen } from './components/quiz/ResultScreen';
import type { Quiz, QuizOptionKey, Screen } from './types/quiz';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<QuizOptionKey | null>(null);
  const [score, setScore] = useState(0);

  const handleStartQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setScreen('quiz');
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  const handleBackHome = () => {
    setScreen('home');
  };

  const currentQuestion = activeQuiz?.questions[currentIndex];

  const handleOptionSelect = (key: QuizOptionKey) => {
    if (!activeQuiz) return;

    setSelectedOption(key);

    // Đợi một chút để người dùng thấy effect chọn rồi mới chuyển câu
    setTimeout(() => {
      const points = activeQuiz.questions[currentIndex].options[key].points;
      const newScore = score + points;
      setScore(newScore);

      if (currentIndex < activeQuiz.questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setScreen('result');
      }
    }, 300);
  };

  const quizResult = useMemo(() => {
    if (!activeQuiz || screen !== 'result') return null;
    return activeQuiz.results.find((result) => score >= result.min && score <= result.max) ?? null;
  }, [activeQuiz, screen, score]);

  const progress = activeQuiz ? ((currentIndex + 1) / activeQuiz.questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600/20">
      <AnimatePresence mode="wait">
        {screen === 'home' && <HomeScreen quizzes={QUIZZES} onStartQuiz={handleStartQuiz} />}

        {screen === 'quiz' && activeQuiz && currentQuestion && (
          <QuizScreen
            activeQuiz={activeQuiz}
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            progress={progress}
            selectedOption={selectedOption}
            onBackHome={handleBackHome}
            onOptionSelect={handleOptionSelect}
          />
        )}

        {screen === 'result' && activeQuiz && quizResult && (
          <ResultScreen
            score={score}
            quizResult={quizResult}
            onBackHome={handleBackHome}
            onRetry={() => handleStartQuiz(activeQuiz)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
