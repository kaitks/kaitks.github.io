---
layout: post
title: 'Làm sao để giúp quá trình review code hiệu quả hơn'
categories:
  - programming
---

Trong dự án, trách nhiệm review code chính thường được giao cho những kỹ sư có kinh nghiệm. Thông thường họ sẽ là team lead, hoặc senior developer của dự án.

Vì trách nhiệm cao, những kỹ sư này thường xuyên bận rộn do có rất nhiều việc phải làm:

- Quản lý tiến độ của team member
- Phát triển các chức năng đang phụ trách
- Hỗ trợ phân tích yêu cầu khách hàng,review test-case
- Hỗ trợ thiết kế chức năng
- Tham gia vào các cuộc họp tầm tổ chức
- Và còn nhiêu việc khác nữa...

Việc review code tuy quan trọng, nhưng không phải là tất cả những việc mà những kỹ sư này phụ trách.

Ở khía cạnh khác, việc review code không phải chỉ nhằm mục đích hoàn thành công việc, mà đó còn là một trong những hình thức mentor tốt nhất, là cách truyền đạt kinh nghiệm hiệu quả giữa các kỹ sư với nhau.

Vì thế việc trình bày PR tốt không chỉ phục vụ cho dự án, mà trên hết đó là cách giúp bản thân trưởng thành thông qua việc học hỏi kinh nghiệm từ người khác.

Và nếu là mình, mình sẽ muốn những người giúp mình phát triển cảm thấy happy khi đang làm việc đó.

### Bắt đầu từ việc đặt tên PR

Tốt nhất là đặt tên PR thể hiện được chức năng chính của code. Ví dụ:

- Tên của issue: `Phát triển chức năng pagination cho màn hình index`
- Tên của PR: `Phát triển chức năng pagination cho màn hình index`

### Link PR và issue với nhau

Sử dụng cú pháp `#(số issue/pr)` để link PR và issue với nhau trong comment đầu tiên trên cùng. Mục đích để:

- Giúp người review code biết PR đang xử lý cho issue nào
- Giúp người quản lý issue biết được issue đã được giải quyết chưa mà không cần phải tìm trong danh sách comment của issue

Không có giải pháp nào là tốt nhất trong mọi trường hợp. Lời khuyên tốt nhất chỉ có được khi ta đã hiểu rõ vấn đề đang gặp phải. Bạn cũng không muốn người review làm việc như một cỗ máy phải không nào?

### Bổ sung test-case, kết quả test vào PR

Test-case sẽ là một trong những tài liệu giúp người review hiểu được:

- Chức năng mà task yêu cầu là gì
- Người code đang hiểu yêu cầu như thế nào
- Người code đã suy nghĩ được đến những edge case nào

Bạn cũng nên gắn hình chụp màn hình hoặc chứng cứ hoàn thành chức năng vào PR. Việc này giúp người review có thể hình dung được output của chức năng mà không cần phải pull code về và chạy thử.

Bạn nên trình bày những hình chụp này thật dễ nhìn. Đối với các hình hẹp chiều ngang (portrait), bạn nên format hình với width bằng 50% để việc hiển thị hình trên màn hình laptop được đầy đủ hơn.

### Tách commit theo từng chức năng rõ ràng

Nhìn qua list commit của người code, người reiew có thể biết được các step chính mà người code đã làm.

Ngoài ra với các PR lớn, việc review theo từng commit sẽ giúp người review có thể tập trung vào từng vùng code liên quan đến nhau để review dễ hơn.

### Giải thích sẵn các điểm phức tạp, chưa rõ bằng chức năng review của github (nếu cần)

Trong quá trình code, việc làm cho code dễ hiểu nhất, giảm lượng comment đến mức tối đa là điều mà ta mong muốn.

Tuy nhiên, đối với những đoạn code phức tạp, việc có thêm giải thích chi tiết sẽ giúp người review tiết kiệm được thời gian đọc code.

Ngoài ra, đối với những điểm mà người code chưa thực sự hiểu, hài lòng hoặc cảm thấy có rủi ro, người code có thể dùng comment để truyền đạt suy nghĩ của mình.

Comment nên thể hiện lý do ta chọn một giải pháp, chứ không nên tập trung miêu tả về giải pháp. Ví dụ:

![sample self comment](/assets/images/sample-self-comment.png)

Các bạn có thể tham khảo PR thực hiện các điểm trên [tại đây](https://github.com/kaitks/kaitks.github.io/pull/2)

# Những suy nghĩ sẽ khiến cho quá trình review code không hiệu quả

### Người review code là cấp trên, có nhiều kinh nghiệm nên chắc chắn sẽ tìm ra hết mọi sai sót, khuyết điểm của mình. Mà code của mình cũng dễ hiểu rồi mà nhỉ?

Thực tế, là senior developer, hay ngay cả tech lead cũng không phải biết tất cả mọi thứ. Và cũng không phải CPU của họ sẽ tự động nhanh hơn theo thời gian.

Giá trị lớn nhất của một senior develper, tech lead đôi khi không phải là tốc độ của họ, mà đó là kinh nghiệm được tích luỹ sau bao năm tháng làm việc ở nhiều dự án khác nhau: kinh nghiệm để biết thế nào là đủ tốt, kinh nghiệm để giảm khả năng gây ra bug, kinh nghiệm để truyền đạt được hiệu quả, kinh nghiệm để tiết kiệm thời gian cho người khác.

Không phải cứ là senior developer, tech lead rồi thì họ hoàn toàn không cần giúp đỡ để đọc hiểu PR dài 200 dòng mang ý nghĩa gì. Trong thực tế những PR mình đọc thường còn dài hơn thế. Và đó thực sự không dễ dàng.

Hãy giúp đỡ người giúp bạn tốt hơn.

Side note: nếu bạn nghĩ code của bạn đã dễ hiểu, mình nghĩ bạn nên đọc bài viết: [Thế nào là code tốt]({% post_url 2019-06-29-ibst-what-is-good-code %})

### Nếu năng lực của bản thân là tốt nhất, thì không cần người khác review code của mình

Nhân vô thập toàn, những ý tưởng tốt thường là kết quả của một quá trình trao đổi, tương tác. [Nói chuyện với con vịt](https://blog.codinghorror.com/rubber-duck-problem-solving/) cũng có hiệu quả nữa mà. 

Thái độ làm việc chân thành với nhiều người khác nhau sẽ đem lại gặt hái không ngờ đấy.

Dù lý do là gì, nếu có thể thì hãy đừng bao giờ skip code review nhé.