import { Users } from 'lucide-react';
import type { Quiz } from '../../types/quiz';

export const managerLeaderQuiz: Quiz = {
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
};
