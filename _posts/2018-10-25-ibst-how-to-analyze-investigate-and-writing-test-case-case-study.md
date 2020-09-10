---
layout: single
title: 'Phân tích yêu cầu, điều tra và viết test-case (Phần 2)  '
categories:
  - old
date: 2018-10-25 01:00:00
---

# Case study

## Yêu cầu

Ta nhận được yêu cầu thay đổi giao diện chức năng comment từ phía khách hàng như sau

![Mẫu yêu cầu](/assets/ibst/requirement-sample.png)

## Phân tích

Đây là một yêu cầu đơn giản, tuy nhiên khi phân tích vào chi tiết sẽ có nhiều điểm cần lưu ý. Ví dụ:

- Date format thường được sử dung đồng nhất toàn dự án, nếu ta đổi date format ở màn hình này thì liệu ở những màn hình khác ta có cần làm điều tương tự hay không?
- Format hiển thị ngày tháng đang có những pattern nào? Ví dụ:
  - Ngày comment cùng năm với năm hiện tại
  - Ngày comment nằm ở năm của quá khứ?
  - 18, Oct, 17 có vẻ hơi rối, liệu ta có nên ghi rõ năm ra là 2017, giữa ngày và tháng không có dấu phẩy được hay không?
  - Nếu ngày comment giá trị là rỗng hoặc null thì ta sẽ hiển thị gì?

## Điều tra (tiến hành song song với bước phân tích)

Sau khi tiến hành điều tra source code và trao đổi với khách hàng, ta đã có được câu trả lời như sau:

- Việc thay đổi date format là một phần trong kế hoạch làm đồng nhất lại toàn bộ date format, nếu phát hiện ra chỗ nào chưa tuân theo format này thì ta sẽ sửa, nhưng cần xác nhận lại khách hàng trước khi làm.

- Format hiển thị ngày có những pattern sau:
  - Ngày comment cùng với năm hiện tại: sẽ không hiển thị năm
  - Ngày comment nằm ở năm với quá khứ thì sẽ hiển thị năm, tuy nhiên nếu trước năm hiện tại 3 năm thì sẽ không hiển thị ngày, tháng, năm mà chỉ hiện: more than 3 years ago, more than 4 years ago,...
  - Năm sẽ được hiển thị full chữ, bỏ dấu phẩy giữa ngày tháng
  - Nếu ngày comment giá trị là rỗng hoặc null thì ta sẽ chỉ hiển thị "ltrach commented", bỏ chữ on.

## Viết test-case

Sau khi tiến hành phân tích thì yêu cầu ngắn ban đầu đã trở nên phức tạp hơn. Và nhờ việc phân tích chi tiết spec mà bây giờ ta đã có thể tiến hành viết test-case cover cho tất cả trường hợp:

| Ngày comment | Hiển thị                                   |
| ------------ | ------------------------------------------ |
| 18/10/2017   | ltrach commented on 18 Oct, 2017 (Thusday) |
| 18/10/2018   | ltrach commented on 18 Oct (Thusday)       |
| 18/10/2015   | ltrach commented more than 3 years ago     |
| null         | ltrach commented                           |

Sau bước trên thì việc viết test-case đã kết thúc.

# Lời kết

Yêu cầu của khách hàng sẽ có nhiều mức độ từ đơn giản đến phức tạp. Tuy nhiên dù nội dung ban đầu như thế nào, việc phân tích, điều tra và viết test-case là những bước chuẩn bị cần thiết để đảm bảo quá trình phát triển diễn ra thuận lợi, không bị bug và đạt kì vọng từ phía khách hàng.

Hi vọng qua case study này các bạn đã có được một bức tranh cơ bản về quá trình chuẩn bị này.

Chúc các bạn một ngày phát triển hiệu xuất!
