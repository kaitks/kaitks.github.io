---
layout: single
title: 'Làm sao để giúp người review code của bạn happy hơn (format your pr ftw)'
---

Những lập trình viên bận rộn có rất nhiều việc phải làm trong ngày:

- Quản lý tiến độ các task của họ (team của họ nếu là leader)
- Phát triển các chức năng được giao
- Hỗ trợ review thiết kế chức năng
- Hỗ trợ review test-case
- Cross review code cho thành viên khác trong đội
- etc...

Vì thế format PR sao cho dễ hiểu sẽ giúp người review của bạn happy hơn rất nhiều.

# Đặt tên PR

Tốt nhất là lấy tên PR giống như issue được giao. Ví dụ:

- Title của issue: `Phát triển chức năng pagination cho màn hình index`
- Tittle của PR: `PR: Phát triển chức năng pagination cho màn hình index`

# Link PR và issue với nhau

Sử dụng cú pháp `#(số issue/pr)` để link PR và issue với nhau.

Ví dụ:

- Ở trong PR, link PR với issue:

Mục đích:

- Giúp người review code biết PR đang xử lý cho issue nào

- Ở trong issue, link issue với PR:

Mục đích:

- Giúp người quản lý issue biết được issue đã được giải quyết chưa mà không cần phải tìm trong danh sách comment của issue

# Gắn link test-case vào comment đầu

Việc đọc test-case của người code sẽ giúp người review hiểu được:

- Task yêu cầu là gì
- Người code đang hiểu yêu cầu như thế nào

# Gắn hình chụp màn hình hoặc chứng cứ hoàn thành chức năng vào PR

Giúp người review có thể hình dung được output của chức năng mà không cần phải pull code về và chạy thử

Đối với các hình hẹp chiều ngang (portrait), bạn nên format hình với width bằng 50% để việc xem hình được dễ dàng hơn.

# Tách commit theo từng chức năng rõ ràng

Nhìn qua list commit của người code, người reiew có thể biết được các step chính mà người code đã làm.
Ngoài ra với các PR lớn, việc review theo từng commit sẽ giúp người review có thể tập trung vào từng vùng chức năng liên quan đến nhau để hiểu hơn về code.

# Tự comment các điểm phức tạp, chưa rõ bằng chức năng review

Trong quá trình code, dĩ nhiên việc làm cho code dễ hiểu nhất, giảm lượng comment đến mức tối đa là điều mà ta mong muốn.
Tuy nhiên, đối với những đoạn code phức tạp, việc có thêm sự giải thích chi tiết sẽ giúp người đọc code tiết kiệm được thời gian trong qua trình code.
Ngoài ra, đối với những điểm mà người code chưa thực sự hiểu, hài lòng hoặc cảm thấy có rủi ro, người code có thể dùng comment để truyền đạt suy nghĩ của mình.
Ví dụ:

![sample self comment](/assets/ibst/sample-self-comment.png)

Các bạn có thể tham khảo PR thực hiện các điểm trên [tại đây](https://github.com/kaitks/kaitks.github.io/pull/2)
