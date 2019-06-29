---
layout: single
title: 'Thế nào là code tốt'
categories:
  - improve-by-doing-simple-things
---

![good-code-bad-code](https://i.stack.imgur.com/eTZvW.jpg)

# Những đại thụ trong ngành nói gì về code

```
“Before software can be reusable it first has to be usable.” – Ralph Johnson

“Code is like humor. When you have to explain it, it’s bad.” – Cory House

“First, solve the problem. Then, write the code.” – John Johnson

“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery

“Without requirements or design, programming is the art of adding bugs to an empty text file.” - Louis Srygley

“Make it work, make it right, make it fast.” – Kent Beck

"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie
```

# Code tốt là gì

Theo mình, code tốt là code:

- Thực hiện đúng chức năng được yêu cầu từ phía khách hàng
- Dễ maintenance

Việc đảm bảo được chức năng có thể dễ dàng được kiểm tra bằng cách đối chiếu chức năng của sản phẩm với yêu cầu được ghi chú trong spec hoặc user story.

Mặc khác, "dễ maintenance" là một khái niệm mang tính chủ quan. Một đoạn code có thể dễ maintenance đối với người viết ra đoạn code đó, nhưng lại khó maintenance đối với một lập trình viên khác.

Bản thân mình cũng không phải là ngoại lệ. Trong mỗi thời kỳ của quá trình phát triển phần mềm của mình, quan điểm của mình có khác nhau.

Ví dụ, ngày xưa khi mới bắt đầu code, khi thấy một module code trên 200 dòng, hoặc một function dài 200 dòng, mình sẽ cảm thấy khó chịu và lập tức đánh giá về năng lực của người viết đoạn code đó. Thời điểm đó mình hoàn toàn không nghĩ đến các yếu tố:

- Liệu function, module có thực hiện đầy đủ chức năng không. Có nhiều bug không.
- Liệu nội dung trong function này, module này có dễ hiểu không. Code dài và code khó hiểu là hai khái niệm khác nhau. Dài chưa chắc khó hiểu, còn ngắn mà dùng function compose quá nhiều thì chưa chắc đã dễ hiểu.
- Chức năng, những điểm khó hiểu của module, đoạn code này có được document đầy đủ không. Tài liệu API viết tốt không.
- Khối lượng công việc của người ban đầu code ra module như thế nào. Rất có thể họ đã code ra module này chỉ trong một, hai ngày. Mình đã từng chứng kiến một engineer người Nhật code ra cả một tool CMS trong 3 ngày, với đầy đủ chức năng, phân quyền, và UI rất đẹp. Mình đã từng làm việc tương tự như vậy trong hai tuần. Và dù code của mình gọn gàng hơn, mình vẫn rất tôn trọng engineer người Nhật này.

Trong thực tế, mình thường xuyên thấy những đoạn code khó hiểu nhất, khó maintenance nhất thường được viết bởi những lập trình viên thông minh, nhưng thiếu kinh nghiệm. Ví dụ mình từng làm một dự án áp dụng functional programming quá nhiều. Functional programming nếu dùng đúng chừng mực, sẽ giúp cho code dễ hiểu hơn, nhưng nếu làm dụng quá thì sẽ rất khó hiểu với những người không có nhiều kinh nghiệm làm functional programming.

Hay ví dụ như mình từng chứng kiến một lập trình viên tự viết ra một framework web app, sau đó ứng dụng vào hệ thống, thay vì sử dụng những open source framework được sử dụng rộng rãi, thường xuyên được cập nhật, với document đầy đủ.

Hay ví dụ như một lập trình viên khác, tự viết ra một library parsing JSON, nhằm đảm bảo luôn parse được dữ liệu, và gắn giá trị default cho dữ liệu đó khi có giá trị null hoặc undefined nằm trong JSON. Về mặc ý tưởng thì hợp lý, nhưng đây là một vấn đề không tồn tại đối với trường hợp cụ thể này.

Và mình thật sự không muốn phải là người maintenance một framework, hay một thư viện của một ai khác. Vì mình quan tâm nhất là đến business logic, chứ không phải lớp wrapper che mất business logic.

Mĩnh nghĩ lập trình viên nên tập trung vào giải quyết vấn đề của khách hàng, chứ không phải giải quyết bài toán mình tự tưởng tượng ra.

Và khi trở thành Team Lead, suy nghĩ của mình về việc dễ maintenance đã thay đổi thêm một lần nữa.

#Khi code, hãy suy nghĩ về người sẽ maintenance code của mình

 Người này background như thế nào, đã từng có kinh nghiệm với ngôn ngữ nào?

Số năm kinh nghiệm của người này là bao nhiêu?

Commitment của người này với dự án sẽ ra sao? Liệu họ có muôn take extra effort để học thêm một ngôn ngữ, một thư viện mới không.

Liệu bạn có còn ở lại công ty để bàn giao lại cho người này không.

Nếu bạn `don't give a fuck` về những vấn đề này, việc code của bạn dễ maintenance hay không khả năng cao sẽ là hit or miss.

Không phải lập trình viên giỏi nào cũng muốn học thêm ngôn ngữ mới để giải quyết một bài toán đơn giản.

Không phải ngôn ngữ nào cũng sẽ mãi là ngôn ngữ tốt, thời thượng. Hãy nhớ lại Java, PHP, Ruby, Nodejs. Ngôn ngữ nào cũng có thời của mình.

Mình rất thích Ruby, nhưng mình sẵn sàng viết sản phẩm bằng Java, nếu người maintenance code của mình là một   senior Java, đã có gia đình và muốn dành thời gian cho gia đình.

Mà thật ra học Ruby vào năm 2019 này, liệu có ý nghĩa gì?

Hot trend bây giờ phải là Go, Clojure, Scala, hay Machine Learning, AI chứ nhỉ?

Thật ra ngôn ngữ lập trình có quan trọng? Khi vào lúc dự án cần, công ty cần, không có ai biết ngôn ngữ đó.

Dự án mình đang làm được viết bằng Clojure, rất hay. Người viết là một engineer mà mình rất kính trọng. Tốc độ code của anh ấy thật sự rất kinh ngạc, code của anh ấy rất trực quan, và là một người có hiểu biết sâu sắc về ngành lập trình. Nhưng số người maintenance được dự án này chỉ đếm trên đầu ngón tay. Vì không phải ai cũng đủ khả năng học Clojure. Thật sự rất đáng tiếc, nhưng trừ khi muốn lọc ra những người giỏi nhất, mình sẽ không chọn Clojure cho dự án sắp tới của team.

Viết code không phải chỉ để thoả mãn đam mê học hỏi của mình. Trước khi code là đam mê, thì code là một nghề, cũng như bao nghề khác. Viết code không phải chỉ cho mình, mà còn cho khách hàng, đồng nghiệp, những người sẽ ở lại, giúp duy trì đứa con tinh thần của bạn, ngay cả khi bạn đã trưởng thành, và đi tìm một cơ hội khác tốt hơn.

Mà đam mê vào lúc 22 tuổi, lúc mới ra trường, với đam mê vào lúc 30 tuổi, khi đã có gia đình, chắc gì đã giống nhau. Có mấy ai cháy mãi với đam mê được không, hay chỉ với một số ít may mắn. 

Không có đam mê code, thì có làm trong ngành lập trình được không? Mình nghĩ bạn nên suy nghĩ nhiều về chuyện này, khi bạn là một member trong một tổ chức, một dự án.

Code dễ maintenance, không phải chỉ là thể hiện trình độ của bản thân, mà còn thể hiện tính nhân văn của bản thân nữa.

# Ngoài lề. Phân biệt giữa

![code tốt - code xấu](/assets/ibst/good-code-bad-code.png)

Nhìn chung, chúng ta sẽ cố gắng để giữ code đảm bảo được tính chính xác (correct), đơn giản (simple), và ngắn gọn (short)

Tuy nhiên, sẽ có lúc tất cả các điều kiện không thể thoả mãn được, khi đó ta sẽ lựa chọn đánh đổi theo độ ưu tiên, ví dụ:

- Ta ưu tiên sự đơn giản, chấp nhận code dài hơn.
- Ta chưa có giải pháp tốt, ta ưu tiên sự chính xác, hi sinh sự đơn giản và tính ngắn gọn.
- Tuy nhiên, ta không được hi sinh sự đơn giản, để viết code ngắn hơn.
