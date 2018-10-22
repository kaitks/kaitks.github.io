---
layout: single
title: 'Phân tích yêu cầu, điều tra và viết test-case'
categories:
  - improve-by-doing-simple-things
---

# Phân tích yêu cầu

Để phân tích yêu cầu ta sẽ áp dụng lần lượt các bước sau:

## Thu thập yêu cầu ban đầu

- Trao đổi trực tiếp, tổng hợp các tài liệu được giao từ phía khách hàng.
- Dịch tài liệu liên quan sang ngôn ngữ phù hợp (tiếng Việt hoặc Anh).

## Phân tích yêu cầu và tiến hành điều tra

### Ta đặt ra các câu hỏi để làm rõ yêu cầu

- Nội dung yêu cầu đã rõ ràng chưa.
- Với dữ liệu cung cấp đã đầy đủ chưa, đã có thể thực hiện được yêu cầu chưa.
- Logic của yêu cầu có phù hợp, đồng nhất với chức năng hiện tại hay không. Có yêu cầu nào đối lập với nhau hay không.

### Song song với quá trình phân tích, ta tiến hành điều tra

- Mục đích của điều tra:
  - Cung cấp dữ liệu để phục vụ cho việc phân tích yêu cầu:
    - Chức năng hiện tại ra sao, business logic có những gì.
    - Với yêu cầu hiện tại thì việc implement sẽ cần có những thông tin gì.
  - Nghiên cứu và thiết kế thử giải pháp, phạm vi ảnh hưởng để tạo ra:
    - Bảng thiết kế cơ bản cho giải pháp
    - Work-breakdown cùng estimation

## Document lại yêu cầu

- Tổng hợp lại yêu cầu và ghi chép thành tài liệu.
- Mô hình hoá yêu cầu để có thể nhìn thấy được một cách trực quan, thông qua những công cụ như business flow, use case diagram.

# Viết test-case

Đối với viết test-case, mục tiêu của chúng ta là:

- Đảm bảo tất cả các yêu cầu của khách hàng đã được thực hiện.
- Đảm bảo những chức năng nằm ngoài phạm vi của yêu cầu không bị ảnh hưởng.
