
---
layout: single
title: 'Improve code từ những việc đơn giản - Phân tích yêu cầu, điều tra giải pháp và viết test-case'
---

# Phân tích yêu cầu

Để phân tích yêu cầu ta sẽ áp dụng lần lượt các bước sau:

1. Thu thập yêu cầu:

- Trao đổi trực tiếp, tổng hợp các tài liệu được giao từ phía khách hàng.
- Dịch tài liệu liên quan sang ngôn ngữ phù hợp (tiếng Việt hoặc Anh).

2. Phân tích yêu cầu: ta đặt ra các câu hỏi để làm rõ yêu cầu:

- Nội dung yêu cầu đã rõ ràng chưa.
- Với dữ liệu cung cấp đã đầy đủ chưa, đã có thể thực hiện được yêu cầu chưa.
- Logic của yêu cầu có phù hợp, đồng nhất với chức năng hiện tại hay không. Có yêu cầu nào đối lập với nhau hay không.

3. Document lại yêu cầu:

- Tổng hợp lại yêu cầu và ghi chép thành tài liệu.
- Mô hình hoá yêu cầu để có thể nhìn thấy được một cách trực quan, thông qua những công cụ như business flow, use case diagram.

# Điều tra

# Viết test-case

Đối với viết test-case, mục tiêu của chúng ta là:

- Đảm bảo tất cả các yêu cầu của khách hàng đã được thực hiện.
- Đảm bảo những chức năng nằm ngoài phạm vi của yêu cầu không bị ảnh hưởng.

# Case study

## Yêu cầu

Ta nhận được yêu cầu thay đổi mục comment như sau từ phía khách hàng

![Mẫu yêu cầu](/assets/ibst-requirement-sample.png)

## Phân tích

Đây là một yêu cầu nhìn chung là đơn giản, tuy nhiên khi phân tích vào chi tiết ta sẽ thấy có nhiều điểm cần lưu ý. Ví dụ:

- Date format thường được sử dung đồng nhất toàn dự án, nếu ta đổi date format ở màn hình này thì liệu ở những màn hình khác ta có cần làm điều tương tự hay không?
- Format hiển thị ngày tháng đang có những pattern nào? Ví dụ:
  - Ngày comment cùng năm với năm hiện tại
  - Ngày comment nằm ở năm của quá khứ?
  - 18, Oct, 17 có vẻ hơi rối, liệu ta có nên ghi rõ năm ra là 2017, giữa ngày và tháng không có dấu phẩy được hay không?
  - Nếu ngày comment giá trị là rỗng hoặc null thì ta sẽ hiển thị gì?

## Điều tra (tiến hành song song với bước phân tích)

Sau khi tiến hành điều tra source code và trao đổi với khách hàng, ta đã có được câu trả lời như sau:

- Việc thay đổi date format là một phần trong kế hoạch làm đồng nhất lại toàn bộ date format, nếu phát hiện ra chỗ nào chưa tuân theo format này thì ta sẽ sửa, nhưng cần xác nhận lại khách hàng trước khi làm.

- Format hiển thị ngày có những pattern sau:
  - Ngày comment cùng với năm hiện tại: sẽ không hiển thị năm
  - Ngày comment nằm ở năm với quá khứ thì sẽ hiển thị năm, tuy nhiên nếu trước năm hiện tại 3 năm thì sẽ không hiển thị ngày, tháng, năm mà chỉ hiện: more than 3 years ago, more than 4 years ago,...
  - Năm sẽ được hiển thị full chữ, bỏ dấu phẩy giữa ngày tháng
  - Nếu ngày comment giá trị là rỗng hoặc null thì ta sẽ chỉ hiển thị "ltrach commented", bỏ chữ on.

## Viết test-case

Sau khi tiến hành phân tích thì yêu cầu ngắn ban đầu đã trở nên phức tạp hơn. Và nhờ việc phân tích chi tiết spec mà bây giờ ta đã có thể tiến hành viết test-case cover cho tất cả trường hợp:

| Ngày comment | Hiển thị |
|------| ------|
| 18/10/2017 | ltrach commented on 18 Oct, 2017 (Thusday) |
| 18/10/2018 | ltrach commented on 18 Oct (Thusday) |
| 18/10/2015 | ltrach commented more than 3 years ago |
| null | ltrach commented |
