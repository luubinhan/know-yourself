import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  RotateCcw, 
  Home, 
  CheckCircle2, 
  Users, 
  Zap, 
  Trophy,
  ArrowRight,
  TrendingUp,
  Brain,
  Layout
} from 'lucide-react';

// --- DATA ---
interface Option {
  text: string;
  points: number;
}

interface Question {
  id: number;
  text: string;
  options: {
    A: Option;
    B: Option;
    C: Option;
  }
}

interface ResultGroup {
  min: number;
  max: number;
  title: string;
  description: string;
  strengths: string[];
  tips: string;
}

interface Quiz {
  id: string;
  title: string;
  tagline: string;
  icon: any;
  questions: Question[];
  results: ResultGroup[];
}

const QUIZZES: Quiz[] = [
  {
    id: 'manager-leader',
    title: 'Quản lý vs. Lãnh đạo',
    tagline: 'Khám phá xem bạn là người thực thi giỏi hay người dẫn dắt tầm nhìn.',
    icon: Users,
    questions: [
      {
        id: 1,
        text: 'Khi đội ngũ của bạn đối mặt với một vấn đề hóc búa, bạn thường...',
        options: {
          A: { text: 'Trực tiếp đưa ra giải pháp ngay lập tức', points: 1 },
          B: { text: 'Thu thập ý kiến của mọi người trước khi quyết định', points: 3 },
          C: { text: 'Tạo không gian để đội ngũ tự giải quyết và chỉ hỗ trợ khi cần', points: 5 }
        }
      },
      {
        id: 2,
        text: 'Mục tiêu chính của bạn trong công việc là...',
        options: {
          A: { text: 'Hoàn thành các KPI và quy trình đúng thời hạn', points: 1 },
          B: { text: 'Cân bằng giữa hiệu quả công việc và phát triển nhân sự', points: 3 },
          C: { text: 'Truyền cảm hứng và tạo ra những thay đổi mang tính đột phá', points: 5 }
        }
      },
      {
        id: 3,
        text: 'Bạn quản lý quỹ thời gian của mình như thế nào?',
        options: {
          A: { text: 'Lập kế hoạch chi tiết từng phút và tuân thủ nghiêm ngặt', points: 1 },
          B: { text: 'Lập kế hoạch nhưng luôn sẵn sàng điều chỉnh khi cần', points: 3 },
          C: { text: 'Ưu tiên dựa trên các giá trị cốt lõi, không gò bó vào lịch trình', points: 5 }
        }
      },
      {
        id: 4,
        text: 'Khi một thành viên trong nhóm mắc sai lầm, bạn sẽ...',
        options: {
          A: { text: 'Chỉ ra lỗi và yêu cầu khắc phục theo đúng quy trình', points: 1 },
          B: { text: 'Thảo luận nguyên nhân và đưa ra sự hỗ trợ trực tiếp', points: 3 },
          C: { text: 'Coi đó là cơ hội học hỏi và trao quyền để họ tự sửa đổi', points: 5 }
        }
      },
      {
        id: 5,
        text: 'Bạn thường đưa ra các quyết định quan trọng dựa trên...',
        options: {
          A: { text: 'Dữ liệu, quy trình và kinh nghiệm thực tế từ quá khứ', points: 1 },
          B: { text: 'Sự kết hợp giữa phân tích số liệu và đánh giá tình huống', points: 3 },
          C: { text: 'Tầm nhìn dài hạn và các giá trị cốt lõi bền vững', points: 5 }
        }
      },
      {
        id: 6,
        text: 'Bạn định nghĩa thành công của đội ngũ là gì?',
        options: {
          A: { text: 'Giao hàng đúng hạn và trong phạm vi ngân sách', points: 1 },
          B: { text: 'Sự phát triển của cá nhân và đạt kết quả chung tốt', points: 3 },
          C: { text: 'Một đội ngũ tự chủ, sáng tạo và có tác động lan tỏa lớn', points: 5 }
        }
      },
      {
        id: 7,
        text: 'Khi bắt đầu một dự án mới, việc đầu tiên bạn làm là...',
        options: {
          A: { text: 'Xây dựng kế hoạch với các nhiệm vụ và deadline rõ ràng', points: 1 },
          B: { text: 'Tổ chức họp nhóm để lắng nghe đóng góp từ mọi người', points: 3 },
          C: { text: 'Chia sẻ tầm nhìn lớn và để đội ngũ tự tìm con đường thực hiện', points: 5 }
        }
      },
      {
        id: 8,
        text: 'Nếu quy trình hiện tại kém hiệu quả, bạn sẽ...',
        options: {
          A: { text: 'Tối ưu hóa trong phạm vi các nguồn lực có sẵn', points: 1 },
          B: { text: 'Đề xuất thay đổi sau khi thu thập đủ dữ liệu và sự đồng thuận', points: 3 },
          C: { text: 'Sẵn sàng phá vỡ quy trình cũ để xây dựng cái mới tốt hơn hẳn', points: 5 }
        }
      },
      {
        id: 9,
        text: 'Cách chính bạn dùng để truyền động lực cho đội ngũ là...',
        options: {
          A: { text: 'Sử dụng các phần thưởng dựa trên hiệu suất công việc', points: 1 },
          B: { text: 'Lắng nghe, hỗ trợ và tạo điều kiện cho mọi người phát triển', points: 3 },
          C: { text: 'Kết nối công việc hàng ngày với mục tiêu và ý nghĩa lớn lao hơn', points: 5 }
        }
      },
      {
        id: 10,
        text: 'Khi nghĩ về tương lai của đội ngũ, bạn tập trung vào điều gì?',
        options: {
          A: { text: 'Sự ổn định và cải tiến dần dần theo thời gian', points: 1 },
          B: { text: 'Sự tăng trưởng bền vững với một đội ngũ gắn kết mạnh mẽ', points: 3 },
          C: { text: 'Những thay đổi mang tính bước ngoặt và đột phá xã hội', points: 5 }
        }
      }
    ],
    results: [
      {
        min: 10, max: 20,
        title: 'NHÀ QUẢN LÝ (MANAGER)',
        description: 'Bạn là chuyên gia về cấu trúc và thực thi. Bạn đảm bảo mọi thứ vận hành trơn tru, đúng tiến độ và đạt hiệu quả tối ưu theo quy trình.',
        strengths: ['Tổ chức khoa học', 'Kỷ luật cao', 'Tập trung kết quả'],
        tips: 'Hãy thử dành thêm thời gian lắng nghe ý kiến sáng tạo của nhân viên và cho phép họ có không gian tự chủ hơn trong công việc.'
      },
      {
        min: 21, max: 35,
        title: 'NGƯỜI KẾT HỢP (HYBRID)',
        description: 'Bạn cân bằng linh hoạt giữa việc quản lý quy trình và dẫn dắt con người. Bạn biết khi nào cần kỷ luật và khi nào cần truyền cảm hứng.',
        strengths: ['Linh hoạt', 'Thấu hiểu nhân sự', 'Thực tế'],
        tips: 'Xác định rõ hơn tầm nhìn dài hạn của mình để giúp đội ngũ nhìn thấy bức tranh lớn hơn thay vì chỉ tập trung vào các mục tiêu ngắn hạn.'
      },
      {
        min: 36, max: 50,
        title: 'NHÀ LÃNH ĐẠO (LEADER)',
        description: 'Bạn là người truyền cảm hứng và định nghĩa hướng đi. Bạn không chỉ quản lý công việc mà còn đánh thức tiềm năng trong mỗi cá nhân để đạt được tầm nhìn lớn.',
        strengths: ['Tầm nhìn xa', 'Truyền cảm hứng', 'Trao quyền'],
        tips: 'Hãy chú ý hơn đến các chi tiết thực thi và quy trình để đảm bảo tầm nhìn của bạn được cụ thể hóa một cách bền vững và thực tế.'
      }
    ]
  },
  {
    id: 'intro-extro',
    title: 'Hướng nội vs. Hướng ngoại',
    tagline: 'Tìm hiểu cách bạn tương tác với thế giới và cách nạp lại năng lượng.',
    icon: Zap,
    questions: [
      {
        id: 1,
        text: 'Sau một ngày dài làm việc căng thẳng, bạn nạp năng lượng bằng cách...',
        options: {
          A: { text: 'Ở một mình — đọc sách, xem phim hoặc nghỉ ngơi yên tĩnh', points: 1 },
          B: { text: 'Dành thời gian trò chuyện với một vài người bạn thân thiết', points: 3 },
          C: { text: 'Đi ra ngoài, tham gia tiệc tùng hoặc gặp gỡ thật nhiều người', points: 5 }
        }
      },
      {
        id: 2,
        text: 'Trong các cuộc họp hoặc sự kiện lớn, bạn có xu hướng...',
        options: {
          A: { text: 'Lắng nghe là chính và chỉ nói khi thực sự cần thiết', points: 1 },
          B: { text: 'Phát biểu khi bạn cảm thấy mình có đóng góp quan trọng', points: 3 },
          C: { text: 'Tích cực tham gia đóng góp ý kiến và dẫn dắt cuộc thảo luận', points: 5 }
        }
      },
      {
        id: 3,
        text: 'Khi phải đưa ra một quyết định quan trọng, bạn thường...',
        options: {
          A: { text: 'Tự mình suy nghĩ thấu đáo trong một khoảng thời gian dài', points: 1 },
          B: { text: 'Tham khảo ý kiến của 1 hoặc 2 người bạn thực sự tin tưởng', points: 3 },
          C: { text: 'Thảo luận rộng rãi vấn đề đó với nhiều người khác nhau', points: 5 }
        }
      },
      {
        id: 4,
        text: 'Bạn cảm thấy làm việc năng suất nhất trong điều kiện nào?',
        options: {
          A: { text: 'Làm việc độc lập hoàn toàn trong không gian yên tĩnh', points: 1 },
          B: { text: 'Làm việc trong một nhóm nhỏ có sự gắn kết tốt', points: 3 },
          C: { text: 'Làm việc trong môi trường năng động, tương tác liên tục', points: 5 }
        }
      },
      {
        id: 5,
        text: 'Khi gặp một người lạ tại một bữa tiệc, bạn sẽ...',
        options: {
          A: { text: 'Đợi họ chủ động tiếp cận và bắt đầu câu chuyện trước', points: 1 },
          B: { text: 'Bắt đầu trò chuyện nếu thấy có một chủ đề chung thú vị', points: 3 },
          C: { text: 'Chủ động giới thiệu bản thân và kết nối ngay lập tức', points: 5 }
        }
      },
      {
        id: 6,
        text: 'Bạn thường xử lý các suy nghĩ và cảm xúc của mình bằng cách...',
        options: {
          A: { text: 'Giữ chúng cho riêng mình và tự chiêm nghiệm lặng lẽ', points: 1 },
          B: { text: 'Chia sẻ chúng với một hoặc hai người thân cận nhất', points: 3 },
          C: { text: 'Nói ra một cách cởi mở — việc giao tiếp giúp bạn suy nghĩ rõ hơn', points: 5 }
        }
      },
      {
        id: 7,
        text: 'Cuối tuần lý tưởng nhất đối với bạn trông như thế nào?',
        options: {
          A: { text: 'Ở nhà, nghỉ ngơi và tập trung vào các sở thích cá nhân', points: 1 },
          B: { text: 'Đi ăn uống hoặc cafe nhẹ nhàng với nhóm bạn thân', points: 3 },
          C: { text: 'Tham gia các sự kiện, hoạt động xã hội sôi động', points: 5 }
        }
      },
      {
        id: 8,
        text: 'Nói chuyện trước một đám đông lớn khiến bạn cảm thấy...',
        options: {
          A: { text: 'Căng thẳng — bạn cần một kế hoạch chuẩn bị cực kỳ kỹ lưỡng', points: 1 },
          B: { text: 'Bình thường nếu bạn đã có sự chuẩn bị tốt về nội dung', points: 3 },
          C: { text: 'Hào hứng — bạn tận hưởng năng lượng nhận được từ đám đông', points: 5 }
        }
      },
      {
        id: 9,
        text: 'Phong cách giao tiếp yêu thích của bạn là...',
        options: {
          A: { text: 'Nhắn tin hoặc email — bạn có thời gian để suy nghĩ kỹ', points: 1 },
          B: { text: 'Gọi điện hoặc gọi video với những người đã quen biết', points: 3 },
          C: { text: 'Gặp mặt trực tiếp — bạn cảm nhận được năng lượng từ đối phương', points: 5 }
        }
      },
      {
        id: 10,
        text: 'Điều nào sau đây mô tả đúng nhất về năng lượng xã hội của bạn?',
        options: {
          A: { text: 'Tương tác nhiều khiến bạn đuối sức và cần thời gian một mình để hồi phục', points: 1 },
          B: { text: 'Tùy thuộc vào bối cảnh cụ thể và những người bạn tiếp xúc cùng', points: 3 },
          C: { text: 'Sự tương tác xã hội giúp bạn cảm thấy phấn chấn và đầy động lực', points: 5 }
        }
      }
    ],
    results: [
      {
        min: 10, max: 22,
        title: 'NGƯỜI HƯỚNG NỘI (INTROVERT)',
        description: 'Bạn tìm thấy sức mạnh trong sự tĩnh lặng và chiều sâu. Thế giới nội tâm phong phú là nơi bạn tỏa sáng và nạp lại năng lượng.',
        strengths: ['Lắng nghe tốt', 'Tư duy sâu sắc', 'Tập trung cao'],
        tips: 'Đừng ngại chia sẻ những suy nghĩ sâu sắc của bạn ra bên ngoài; thế giới rất cần những góc nhìn thấu đáo của bạn.'
      },
      {
        min: 23, max: 37,
        title: 'NGƯỜI CÂN BẰNG (AMBIVERT)',
        description: 'Bạn sở hữu khả năng linh hoạt tuyệt vời, có thể thích nghi tốt với cả không gian yên tĩnh lẫn môi trường xã hội náo nhiệt.',
        strengths: ['Thích nghi tốt', 'Cân bằng cảm xúc', 'Giao tiếp linh hoạt'],
        tips: 'Hãy chú ý lắng nghe tín hiệu cơ thể để biết khi nào cần nạp năng lượng bằng xã hội và khi nào cần tĩnh lặng cho riêng mình.'
      },
      {
        min: 38, max: 50,
        title: 'NGƯỜI HƯỚNG NGOẠI (EXTROVERT)',
        description: 'Bạn là người tràn đầy năng lượng khi được kết nối. Sự tương tác với mọi người chính là nguồn nhựa sống giúp bạn luôn năng nổ.',
        strengths: ['Hòa đồng', 'Tự tin', 'Truyền năng lượng'],
        tips: 'Hãy thử dành ra một vài khoảng lặng trong ngày để tự chiêm nghiệm, điều này sẽ giúp sự nhiệt huyết của bạn trở nên sâu sắc hơn.'
      }
    ]
  }
];

// --- COMPONENTS ---

export default function App() {
  const [screen, setScreen] = useState<'home' | 'quiz' | 'result'>('home');
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleStartQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setScreen('quiz');
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  const currentQuiz = activeQuiz;
  const currentQuestion = currentQuiz?.questions[currentIndex];

  const handleOptionSelect = (key: 'A' | 'B' | 'C') => {
    if (!activeQuiz) return;
    
    setSelectedOption(key);
    
    // Đợi một chút để người dùng thấy effect chọn rồi mới chuyển câu
    setTimeout(() => {
      const points = activeQuiz.questions[currentIndex].options[key].points;
      const newScore = score + points;
      setScore(newScore);

      if (currentIndex < activeQuiz.questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        setScreen('result');
      }
    }, 300);
  };

  const quizResult = useMemo(() => {
    if (!activeQuiz || screen !== 'result') return null;
    return activeQuiz.results.find(res => score >= res.min && score <= res.max);
  }, [score, activeQuiz, screen]);

  const progress = activeQuiz ? ((currentIndex + 1) / activeQuiz.questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600/20">
      <AnimatePresence mode="wait">
        {/* HOME SCREEN */}
        {screen === 'home' && (
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
                Trắc Nghiệm Tính Cách <span className="text-blue-600">AI</span>
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
              {QUIZZES.map((quiz, idx) => (
                <motion.div
                  key={quiz.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  onClick={() => handleStartQuiz(quiz)}
                  className="group cursor-pointer p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-600/40 hover:bg-white hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <quiz.icon size={120} />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <quiz.icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-slate-900">{quiz.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {quiz.tagline}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-semibold gap-1">
                    Bắt đầu ngay <ArrowRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>

            <footer className="mt-24 text-center border-t border-slate-200 pt-8">
              <p className="text-xs text-slate-400 uppercase tracking-[0.2em]">
                Cung cấp bởi AI Studio • 2026
              </p>
            </footer>
          </motion.div>
        )}

        {/* QUIZ SCREEN */}
        {screen === 'quiz' && activeQuiz && currentQuestion && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="min-h-screen flex flex-col max-w-2xl mx-auto px-6 py-12"
          >
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={() => setScreen('home')}
                className="p-2 -ml-2 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Home size={20} />
              </button>
              <div className="text-xs font-mono font-bold tracking-widest text-slate-400">
                CÂU HỎI {currentIndex + 1} / {activeQuiz.questions.length}
              </div>
            </div>

            <div className="h-1.5 w-full bg-slate-200 rounded-full mb-16 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </div>

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
                {(Object.keys(currentQuestion.options) as Array<'A' | 'B' | 'C'>).map((key) => (
                  <motion.button
                    key={key}
                    onClick={() => handleOptionSelect(key)}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                      selectedOption === key 
                        ? 'bg-blue-600/10 border-blue-600 text-blue-700 shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                      selectedOption === key ? 'bg-blue-600 text-white' : 'bg-slate-100'
                    }`}>
                      {key}
                    </span>
                    <span className="text-[15px] leading-relaxed pt-1">
                      {currentQuestion.options[key].text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* RESULT SCREEN */}
        {screen === 'result' && activeQuiz && quizResult && (
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
                <p className="text-slate-600 text-lg leading-relaxed italic border-l-2 border-blue-600 pl-6">
                  "{quizResult.description}"
                </p>
              </section>

              <section className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <CheckCircle2 size={14} /> Điểm mạnh vượt trội
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {quizResult.strengths.map((s, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <TrendingUp size={14} /> Gợi ý định hướng
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {quizResult.tips}
                  </p>
                </div>
              </section>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button 
                onClick={() => setScreen('home')}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-600/20"
              >
                 Quay về Trang chủ
              </button>
              <button 
                onClick={() => activeQuiz && handleStartQuiz(activeQuiz)}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all group shadow-sm"
              >
                Thử lại bài này <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
