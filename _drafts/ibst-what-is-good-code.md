---
layout: single
title: 'Improve code từ những việc đơn giản: thế nào là code tốt'
---

![](https://i.stack.imgur.com/eTZvW.jpg)

# Code tốt có những đặc điểm

- Chạy được.

- Chạy đúng yêu cầu chức năng, được test đầy đủ.
- Dễ hiểu. Khi đọc code không cần đi vào quá chi tiết vẫn hiểu chức năng chính của code.
- Dễ thay đổi. Khi thay đổi xảy ra, mức ảnh hưởng đối với các module khác được hạn chế. - Không gây ra lỗi bất ngờ khi thay đổi một phần của code. (rule of least surprise)
- Được document đầy đủ.

# Khi code tốt ta sẽ được

- Người đọc code sẽ hạnh phúc.

- Chức năng được phát triển nhanh.
- Ít phải OT hơn cho người code và người maintenance code.
- Kết quả công việc của người code được đánh giá cao.
- Kết quả kinh doanh tốt hơn.

# Những hệ quả của việc viết code không đẹp có thể kể đến như

- Developer nhận rất nhiều comment trong quá trình code review, làm mất thời gian của developer và reviewer.

- Cảm nhận về năng lực của bạn sẽ trở nên không tốt trong mắt reviewer, upper level.
- Hay xấu nhất là code của bạn không được merge và release, mặc dù về mặc chức năng không có vấn đề gì.

# Phân biệt giữa

![code tốt - code xấu](/assets/ibst-good-code-bad-code.png)

Nhìn chung, chúng ta sẽ cố gắng để giữ code đảm bảo được tính chính xác (correct), đơn giản (simple), và ngắn gọn (short)

Tuy nhiên, sẽ có lúc tất cả các điều kiện không thể thoả mãn được, khi đó ta sẽ lựa chọn đánh đổi theo độ ưu tiên, ví dụ:

- Ta ưu tiên sự đơn giản, chấp nhận code dài hơn.

- Ta chưa có giải pháp tốt, ta ưu tiên sự chính xác, hi sinh sự đơn giản và tính ngắn gọn.
- Tuy nhiên, ta không được hi sinh sự đơn giản, để viết code ngắn hơn.
