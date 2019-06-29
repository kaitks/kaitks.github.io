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

“First, solve the problem. Then, write the code.” – John Johnson

“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery

“Make it work, make it right, make it fast.” – Kent Beck
```

# Code tốt là gì

Theo mình, code tốt là code:

- Thực hiện đúng chức năng mà khách hàng yêu cầu
- Dễ maintenance

Để kiểm tra chức năng của sản phẩm có đạt yêu cầu không, ta có thể đối chiếu với yêu cầu được ghi chú trong spec hoặc user story.

Khác với tiêu chí đầu tiên, "dễ maintenance" là một khái niệm mang tính chủ quan. Một đoạn code dễ maintenance đối với một kỹ sư này, có thể khó maintenance đối với một kỹ sư khác.

Bản thân mình cũng không phải là ngoại lệ. Trong mỗi thời điểm trong quá trình làm việc, quan điểm của mình về tính "dễ maintenance" có khác nhau.

Ví dụ, khi mới bắt đầu code, khi thấy một module code trên 500 dòng với những một function dài gần cả trăm dòng, mình sẽ cảm thấy khó chịu và lập tức có những suy nghĩ không mang tính xây dựng lắm về năng lực của người viết module code đó. Thời điểm đó mình hoàn toàn không nghĩ đến các yếu tố:

- Liệu function, module có thực hiện đầy đủ chức năng không. Có nhiều bug không.
- Liệu function này, module này có dễ hiểu không. Code dài và code khó hiểu là hai khái niệm khác nhau. Dài chưa chắc khó hiểu, còn ngắn mà lạm dụng function composition quá nhiều thì chưa chắc đã dễ hiểu.
- Chức năng chính và phụ, hoặc những điểm bất thường của module, ví dụ như một đoạn code kiểm tra giá trị để tránh một edge case gây lỗi nào đó có được document đầy đủ không. Tài liệu API viết tốt không.
- Khối lượng công việc của người ban đầu code ra module như thế nào. Rất có thể họ đã code ra module này chỉ trong một, hai ngày. Mình đã từng chứng kiến một kỹ sư người Nhật code ra cả một ứng dụng CMS trong 3 ngày, với đầy đủ chức năng, phân quyền, và UI rất đẹp. Mình đã từng làm việc tương tự như vậy trong hai tuần. Và dù code của mình gọn gàng hơn, mình vẫn rất tôn trọng kỹ sư người Nhật này.

Trong thực tế, mình thường xuyên thấy những đoạn code khó hiểu nhất, khó maintenance nhất thường được viết bởi những lập trình viên thông minh, nhiều ý tưởng, nhưng thiếu kinh nghiệm. 

Mình từng làm một dự án sử dụng Functional programming rất nhiều. Functional programming nếu dùng đúng chừng mực, sẽ giúp cho code tường minh, ngắn gọn hơn. Nhưng nếu quá lạm dụng thì sẽ rất khó hiểu đối với người không có nhiều kinh nghiệm làm Functional programming.

Ta có thể nghĩ, chỉ cần người maintenance dành chút thời gian học Functional programming, thì sẽ hiểu đoạn code trên. Tuy nhiên, ở đây sẽ có ba vấn đề ta nên suy nghĩ:

- Ta có thật sự hiểu rõ về Functional programming hay không? Ta có đủ khả năng thuyết phục kỹ sư khác hiểu giống ta hay không?
- Ta có ở vị thế, có quyền yêu cầu người maintenance học thêm một Programming Paradigm mới?
- Nếu không sử dụng "Functional programming" (bạn có thể thay đoạn trong nháy đôi bằng bất cứ framework, thư viện mà bạn thích), thì chức năng có thể thực hiện được không. Ta phải đánh đổi những gì khi sử dụng cách code (framework, thư viện) này.

Mình nghĩ bằng việc trả lời các câu hỏi trên, bạn sẽ thấy được thêm một số mặt khác của trường hợp trên.

Trong một bối cảnh khác, mình từng chứng kiến một lập trình viên tự viết ra một web framework, sau đó ứng dụng framework này vào sản phẩm, thay vì sử dụng những open source framework được sử dụng rộng rãi, thường xuyên được cập nhật, với document đầy đủ.

Hay ví dụ như một kỹ sư khác viết ra một thư viện parsing JSON, nhằm đảm bảo luôn parse được dữ liệu bằng cách gắn giá trị default cho dữ liệu đó khi object chứa giá trị đó bị null hoặc undefined. Ý tưởng thì hợp lý, vì sẽ tăng tính an toàn cho sản phẩm. Tuy nhiên việc object chứa giá trị null không hề tồn tại theo document của API, vì thế vấn đề thư viện này giải quyết không tồn tại đối với trường hợp cụ thể này. Và người maintenance buộc phải duy trì luôn cả thư viện này.

Về mặc cá nhân, mình thật sự không muốn phải là người maintenance framework hay thư viện của một kỹ sư khác. Vì mình quan tâm nhất là đến business logic, chứ không phải lớp wrapper che mất business logic.

Hiểu rõ business logic sẽ giúp giảm lượng bug khi thay đổi code hiện tại, giúp ta vận hành hệ thống trơn tru hơn, tạo tiền đề để ta tạo lòng tin với khách hàng, mở rộng quy mô dự án.

Bài toán lập trình viên nên giải quyết, tốt nhất là vấn đề khách hàng đang gặp phải, chứ không phải vấn đề trong tự tưởng tượng.

Vì edge case thì có nhiều lắm. Còn thời gian thì là hữu hạn.

# Khi code, hãy nghĩ về người kỹ sư sẽ maintenance code của mình (seriously)

Người này background như thế nào, đã từng có kinh nghiệm với ngôn ngữ lập trình nào?

Số năm kinh nghiệm của người này là bao nhiêu?

Commitment của người này với dự án ra sao? Liệu họ có muôn take extra effort để học thêm một ngôn ngữ, một thư viện mới không.

Liệu ta có còn ở lại công ty để bàn giao, giải thích cho người này không.

Nếu ta `don't give a fuck` về những vấn đề này,  khả năng cao việc code có dễ maintenance hay không sẽ là hit or miss.

Không phải lập trình viên giỏi nào cũng muốn học thêm ngôn ngữ mới để giải quyết một bài toán đơn giản.

Không phải ngôn ngữ nào cũng sẽ mãi là ngôn ngữ tốt, thời thượng. Hãy nhớ lại Java, PHP, Ruby, Nodejs. Ngôn ngữ nào cũng có thời của mình.

Đoạn code năm 2019 ta nghĩ dễ maintenance, chưa chắc sẽ vẫn dễ maintenance vào năm 2025.

Mình thích Ruby, nhưng mình sẵn sàng viết sản phẩm bằng Java, nếu người maintenance code của mình là một   senior Java, đã có gia đình và muốn dành thời gian cho gia đình. Mình cũng không muốn thuyết phục người khác sử dụng Ruby.

Sử dụng Ruby thì khả năng cao sẽ sử dụng Rails. Mà [sách dạy về Rails](https://www.amazon.com/Rails-Way-Addison-Wesley-Professional-Ruby/dp/0134657675/ref=dp_ob_title_bk) thì dài tới hơn 1000 trang. Bằng tiếng Anh.

Liệu người này có giỏi tiếng Anh? Liệu không giỏi tiếng Anh có đồng nghĩa với việc người này không phải là kỹ sư giỏi? Liệu không giỏi tiếng Anh có phải là lỗi của người này? Nếu nhà ta nghèo, không có người định hướng từ bé, ta có giỏi tiếng Anh không?

Chắc gì vào năm 2025, tiếng Anh vẫn là xu thế. Biết đâu giỏi tiếng Trung Quốc lương cao hơn thì sao?

Học Ruby vào năm 2019, liệu có ý nghĩa gì không?

Xu thế bây giờ là Go, Scala, Machine Learning, AI phải không? Nếu được lựa chọn, bạn sẽ học gì? Học để làm gì?

Liệu ngôn ngữ lập trình X, framework Y đang hot bây giờ, có quan trọng? Nếu vào lúc dự án cần, công ty cần, không ai biết ngôn ngữ X, framework Y đó, thì có tốt không?

Trong team mình có một dự án mình được viết bằng Clojure Người viết là một kỹ sư mà mình rất tôn trọng. Tốc độ code của anh ấy thật sự rất kinh ngạc. Code của anh ấy trực quan, không dư thừa. Anh ấy hiểu rõ về ngôn ngữ, framework đang sử dụng, và là một người đã làm đủ lâu để có sự hiểu biết sâu sắc về ngành lập trình. Nhưng số người maintenance được dự án này chỉ đếm trên đầu ngón tay. Vì không phải ai cũng đủ khả năng học Clojure, và anh ấy vẫn đang là maintainer chính của dự án này. Thật sự rất đáng tiếc, nhưng trừ khi muốn lọc ra những người giỏi nhất, mình sẽ không chọn Clojure cho dự án sắp tới của team.

Mĩnh nghĩ viết code không chỉ để thoả mãn đam mê học hỏi của bản thân. Việc code, trước khi là đam mê, thì code là một nghề, cũng như bao nghề khác. Viết code không phải chỉ cho mình, mà còn cho khách hàng, đồng nghiệp, những người sẽ ở lại, giúp duy trì đứa con tinh thần của mình, ngay cả khi mình đã trưởng thành, và đi tìm một cơ hội khác tốt hơn.

Bạn đã thấy được bao nhiêu lập trình viên tiếp tục code khi đã trên 35 tuổi?

Đam mê vào lúc 22 tuổi, mới ra trường, so với đam mê vào lúc 30 tuổi, khi đã có gia đình, liệu là sẽ giống nhau? Có mấy người có thể cháy mãi với đam mê của mình, hay chỉ với một số ít may mắn.

Không có đam mê để học thêm ngôn ngữ X, framework Y, thì có làm trong ngành lập trình được không? Mà kỹ sư không có đam mê code, liệu có phải là một kỹ sư dở?

Bạn có nghĩ ngoài kỹ năng code ra, kỹ năng giải thích, kỹ năng làm việc nhóm, kỹ năng debug, kỹ năng lead, sự kỹ lưỡng cũng quan trọng không kém?

Bạn nghĩ thế nào là đỉnh cao của một lập trình viên?

Là một thành viên trong một tổ chức, một tập thể, bạn có thường xuyên nghĩ về những điều này?

Code dễ maintenance, không phải chỉ là thể hiện trình độ của bản thân, mà còn thể hiện tính nhân văn của bản thân.

Có một kỹ sư nổi tiếng, đã từng nói rằng "Naming là vấn đề khó nhất của lập trình".

Ai cũng muốn code của mình tốt, nhưng cái khó là định nghĩa cho nó.

Đối với bạn, thế nào là "dễ maintenance", thế nào là "code tốt"?

Liệu bạn có thể viết "code tốt" một mình?

# Chuyện ngoài lề: Ta nên ưu tiên gì?

![code tốt - code xấu](/assets/ibst/good-code-bad-code.png)

Nhìn chung, chúng ta sẽ cố gắng để giữ code đảm bảo được tính chính xác (correct), đơn giản (simple), và ngắn gọn (short)

Tuy nhiên, sẽ có lúc tất cả các điều kiện không thể thoả mãn được, khi đó ta sẽ lựa chọn đánh đổi theo độ ưu tiên, ví dụ:

- Ta ưu tiên sự đơn giản, chấp nhận code dài hơn.
- Ta chưa có giải pháp tốt, ta ưu tiên sự chính xác, hi sinh sự đơn giản và tính ngắn gọn.
- Tuy nhiên, ta không được hi sinh sự đơn giản, để viết code ngắn hơn.
