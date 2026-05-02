import { Users, Zap } from 'lucide-react';
import type { Quiz } from '../types/quiz';

export const QUIZZES: Quiz[] = [
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
        min: 10,
        max: 20,
        title: 'NHÀ QUẢN LÝ (MANAGER)',
        description:
          'Bạn là chuyên gia về cấu trúc và thực thi. Bạn đảm bảo mọi thứ vận hành trơn tru, đúng tiến độ và đạt hiệu quả tối ưu theo quy trình.',
        strengths: ['Tổ chức khoa học', 'Kỷ luật cao', 'Tập trung kết quả'],
        tips: 'Hãy thử dành thêm thời gian lắng nghe ý kiến sáng tạo của nhân viên và cho phép họ có không gian tự chủ hơn trong công việc.'
      },
      {
        min: 21,
        max: 35,
        title: 'NGƯỜI KẾT HỢP (HYBRID)',
        description:
          'Bạn cân bằng linh hoạt giữa việc quản lý quy trình và dẫn dắt con người. Bạn biết khi nào cần kỷ luật và khi nào cần truyền cảm hứng.',
        strengths: ['Linh hoạt', 'Thấu hiểu nhân sự', 'Thực tế'],
        tips: 'Xác định rõ hơn tầm nhìn dài hạn của mình để giúp đội ngũ nhìn thấy bức tranh lớn hơn thay vì chỉ tập trung vào các mục tiêu ngắn hạn.'
      },
      {
        min: 36,
        max: 50,
        title: 'NHÀ LÃNH ĐẠO (LEADER)',
        description:
          'Bạn là người truyền cảm hứng và định nghĩa hướng đi. Bạn không chỉ quản lý công việc mà còn đánh thức tiềm năng trong mỗi cá nhân để đạt được tầm nhìn lớn.',
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
  }
];
