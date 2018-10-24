---
layout: single
title: 'Phân tích yêu cầu, điều tra và viết test-case'
categories:
  - improve-by-doing-simple-things
---

# Khái niệm

## Ở hình thái đơn giản nhất, việc phân tích yêu cầu sẽ bao gồm các bước sau

![analyze investigate test-case](/assets/ibst/analyze-investigate-test-case.png)

### Thu thập yêu cầu ban đầu

- Trao đổi trực tiếp, tổng hợp các tài liệu được giao từ phía khách hàng.
- Dịch tài liệu liên quan sang ngôn ngữ phù hợp (tiếng Việt hoặc Anh).

### Phân tích yêu cầu

- Ta đặt ra các câu hỏi để làm rõ yêu cầu
  - Nội dung yêu cầu đã rõ ràng chưa.
  - Với dữ liệu cung cấp đã đầy đủ chưa, đã có thể thực hiện được yêu cầu chưa.
  - Logic của yêu cầu có phù hợp, đồng nhất với chức năng hiện tại hay không. Có yêu cầu nào đối lập với nhau hay không.

### Song song với việc phân tích, ta tiến hành điều tra

- Mục đích của điều tra:
  - Cung cấp dữ liệu để phục vụ cho việc phân tích yêu cầu:
    - Chức năng hiện tại ra sao, business logic có những gì.
    - Với yêu cầu hiện tại thì việc implement sẽ cần có những thông tin gì.
  - Nghiên cứu và thiết kế thử giải pháp, phạm vi ảnh hưởng để tạo ra:
    - Bảng thiết kế cơ bản cho giải pháp
    - Work-breakdown cùng estimation
- Kết quả của việc điều tra nên được mô hình hoá để có thể nhìn thấy được một cách trực quan, thông qua những công cụ như business flow, use case diagram.

### Document lại yêu cầu

- Tổng hợp lại yêu cầu và ghi chép thành tài liệu.

## Viết test-case

# Thực hiện

Kết quả của quá trình phân tích yêu cầu và viết test-case sẽ bao gồm 3 tài liệu:

## Final spec/requirement (Yêu cầu)

- Đây là tài liệu mà sau khi tiến hành phân tích và làm rõ yêu cầu của spec, tất cả tài liệu liên quan như:
  - Yêu cầu ban đầu
  - Câu trả lời từ khách hàng
  - Các điểm khác đã được team làm rõ

sẽ được tập trung vào tài liệu này.

- Tài liệu này sẽ cơ sở (single source of truth) để từ đó đội phát triển tiến hành thiết kế (Detail design) và viết tài liệu test (Test-case)

## Investigation report (Giải pháp & Độ ảnh hưởng)

- Trước khi đi vào thiết kế, tạo Detail design thì nếu được, ta nên tiến hành thảo luận và trình bày giải pháp của ta tới Upper reviewer / khách hàng. Việc này giúp:
  - Giảm lượng comments của Upper reviewer / khách hàng khi review detail design.
  - Giảm khả năng phát sinh thay đổi Detail design.

- Nếu được, Investigation report nên bao gồm:
  - Prototype
  - Sample thực thi giải pháp được hiển thị trên PR của git
  - Sơ đồ business, thực thi code (business workflow, code diagram)

- Một yêu cầu quan trọng khác của Investigation report là phải thể hiện rõ được các vùng code / chức năng bị ảnh hưởng để tiến hành testing cover tất cả các vùng bị ảnh hưởng.

## Work-breakdown và estimation

- List việc cần phải thực hiện để hoàn thành yêu cầu của khách hàng, càng chi tiết càng tốt.
- Estimate thời gian cần thiết để hoàn thành list việc này (tối đa 1 việc là 4h)

## Test-case (Checklist các chức năng cần thực hiện)

- Vì là checklist nên test-case nên được viết ngắn gọn, dễ follow.
- Test-case phải được viết dựa theo hai tài liệu chính là Final spec và Investigation report, để đảm bảo:
  - Tất cả các yêu cầu của khách hàng đã được thực hiện.
  - hững chức năng nằm ngoài phạm vi của yêu cầu không bị ảnh hưởng.
