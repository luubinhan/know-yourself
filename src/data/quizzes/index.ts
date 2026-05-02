import { Zap } from 'lucide-react';
import type { Quiz } from '../../types/quiz';

export const introExtroQuiz: Quiz = {
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
        A: {
          text: 'Tương tác nhiều khiến bạn đuối sức và cần thời gian một mình để hồi phục',
          points: 1
        },
        B: { text: 'Tùy thuộc vào bối cảnh cụ thể và những người bạn tiếp xúc cùng', points: 3 },
        C: { text: 'Sự tương tác xã hội giúp bạn cảm thấy phấn chấn và đầy động lực', points: 5 }
      }
    }
  ],
  results: [
    {
      min: 10,
      max: 22,
      title: 'NGƯỜI HƯỚNG NỘI (INTROVERT)',
      description:
        'Bạn tìm thấy sức mạnh trong sự tĩnh lặng và chiều sâu. Thế giới nội tâm phong phú là nơi bạn tỏa sáng và nạp lại năng lượng.',
      strengths: ['Lắng nghe tốt', 'Tư duy sâu sắc', 'Tập trung cao'],
      tips: 'Đừng ngại chia sẻ những suy nghĩ sâu sắc của bạn ra bên ngoài; thế giới rất cần những góc nhìn thấu đáo của bạn.'
    },
    {
      min: 23,
      max: 37,
      title: 'NGƯỜI CÂN BẰNG (AMBIVERT)',
      description:
        'Bạn sở hữu khả năng linh hoạt tuyệt vời, có thể thích nghi tốt với cả không gian yên tĩnh lẫn môi trường xã hội náo nhiệt.',
      strengths: ['Thích nghi tốt', 'Cân bằng cảm xúc', 'Giao tiếp linh hoạt'],
      tips: 'Hãy chú ý lắng nghe tín hiệu cơ thể để biết khi nào cần nạp năng lượng bằng xã hội và khi nào cần tĩnh lặng cho riêng mình.'
    },
    {
      min: 38,
      max: 50,
      title: 'NGƯỜI HƯỚNG NGOẠI (EXTROVERT)',
      description:
        'Bạn là người tràn đầy năng lượng khi được kết nối. Sự tương tác với mọi người chính là nguồn nhựa sống giúp bạn luôn năng nổ.',
      strengths: ['Hòa đồng', 'Tự tin', 'Truyền năng lượng'],
      tips: 'Hãy thử dành ra một vài khoảng lặng trong ngày để tự chiêm nghiệm, điều này sẽ giúp sự nhiệt huyết của bạn trở nên sâu sắc hơn.'
    }
  ]
};
