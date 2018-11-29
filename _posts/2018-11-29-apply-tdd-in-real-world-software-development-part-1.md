---
layout: single
title: Áp dụng TDD vào phát triển phần mềm thực tế hàng ngày (Phần 1)
categories:
  - testing
---

TDD là một trong những yêu cầu bắc buộc đối với lập trình hiện đại với mục tiêu giảm số lượng bug.

Tuy nhiên TDD không chỉ đơn thuần là việc viết test trước khi code và là điều mà ai cũng có thể làm được ngay lập tức.

Trong thực tế, để có thể thực hiện TDD, người phát triển cần có sự hiểu biết về khái niệm, phương pháp cũng như thời gian để quen dần với cách phát triển phần mềm này.

Nếu ta đánh giá thấp TDD, ta sẽ gặp thất bại khi triển khai nó (ngay từ dòng code đầu tiên).

## Khái niệm

TDD là viết tắt của Test Driven Development.

TDD có khởi thủy từ phương châm test-first-programming (test trước khi code), là một trong những phương pháp chủ đạo của [extreme programming (XP)](https://en.wikipedia.org/wiki/Extreme_programming) nổi lên từ đầu những năm 1999.

Tương đồng với XP, TDD có những mục đích sau:

- Early feedback: phản hồi sớm cho đội ngũ phát triển tình trạng của phần mềm.
- Repetitive feedback: phản hồi liên tục cho đội ngũ phát triển tình trạng của phần mềm.
- Improve design and ease of maintenance: giúp cải thiện design và tăng cường khả năng bảo trì của phần mềm.
- Improve confidence and agility of programming: giúp tăng sự tự tin của lập trình viên và khả năng tùy biến của phần mềm.

> Nếu đã từng làm qua Agile thì các bạn sẽ nhận ra các mục đích trên là tương đồng với mục đích của Agile. Lý do là vì Agile được bắt nguồn chính từ XP đấy các bạn ạ.

### Test trong Test Driven Development

#### Để thực hiện việc testing, chúng ta có 2 hình thức thực hiện chính

- Manual test: từng bước trong việc testing được thực hiện bởi con người.
- Automation test: từng bước trong việc testing được thực hiện bởi máy móc thông qua test code.

Cả hai hình thức này đều có những ưu nhược riêng, nhưng nếu như nhìn lại mục đích của TDD, ta sẽ thấy chỉ có automation test mới đáp ứng được vì:

- Nếu con người thực hiện testing sẽ mất nhiều thời gian và công sức (trí lực và nhân lực).
  - Dẫn đến việc thời gian feedback (phản hồi) sẽ lâu.
  - Và tần suất thực hiện sẽ ít đi.

- Ngoài ra, việc con người thực hiện testing sẽ không giúp lập trình viên cải thiện được chất lượng design của phần mềm vì sự khác nhau về bản chất:
  - Con người khi thực hiện testing chỉ quan tâm đến kết quả (end user output).
  - Trong khi lợi ích improve design được bắt nguồn từ trong quá trình viết test code.

#### Việc viết test code nên được thực hiện vào thời điểm nào

Sau khi phân tích và hiểu rõ yêu cầu của khách hàng.

Sau khi đã thiết kế sơ bộ cho phần code mới (được thêm hoặc sửa).

Thì ta sẽ tiến hành viết test code trước khi code phần code mới này.

### Vòng phát triển khi sử dụng TDD

Thường hay được gọi là vòng phát triển Red, Green và Refactor.

#### 1. Đầu tiên ta sẽ viết 1 fail test. Có nghĩa là ta viết test code cho một chức năng, function chưa được define. Vì thế đoạn test này khi chạy chắc chắn sẽ fail

-> Test result sẽ là màu red (error).

#### 2. Sau đó ta tiến hành code chức năng, function này. Trong quá trình code ta liên tục chạy test code cho đến khi đoạn test ở trên pass

-> Test result lúc này sẽ là màu green (success)

Chú ý: ở step này, ta chỉ cần quan tâm đến việc đoạn test code được pass trở thành màu green. Ta chưa cần quan tâm đến việc đẹp xấu, tối ưu của chức năng, function đang được code.

Việc này được thực hiện theo tinh thần: `Make it works, make it right, make it fast`

#### 3. Ta tiến hành cải tiến design, refactor đoạn code ở step 2

Trong quá trình này ta có thể bổ sung thêm test-case để cover các edge case mà ta chưa cover ở step 1.

Ta vẫn tiến hành viết test-code trước (1 dòng test rồi mới tới 1 dòng code).

Ta không nhất thiết phải tiến hành viết tất cả test-code một lượt, mà việc viết test-code và code tốt nhất nên được tiến hành song song.

### Viết test đối với chức năng mới

Đầu tiên ta chuẩn bị Test-Case, trong Test-Case cần phải có ít nhất các pattern chính của business logic.

Sau đó, ta sẽ viết Integration-Test code.

Ví dụ như nếu ta đang cần phát triển 1 API mới, thì ta sẽ viết test-code bằng cách giả lập một request đến API này, và kiểm tra kết quả trả về.

Sau khi viết test-code này xong, ta tiến hành code API này, code có thể được gom lại trong một file duy nhất.

Sau khi test-code đã được pass (green), ta tiến hành refactor, thiết kế code của API thành các phần nhỏ, dễ test ví dụ như validation, data access layer, error handling.

Sau đó, ta tiến hành viết test-code song song với code.

## Lời kết

Để sử dụng được TDD không phải là chuyện đơn giản mà cần biết kiến thức và phương pháp phù hợp để triển khai nó.

Cảm ơn các bạn đã theo dõi. Mình sẽ đi vào chi tiết hơn về các khái niệm của TDD ở phần sau nhé.
