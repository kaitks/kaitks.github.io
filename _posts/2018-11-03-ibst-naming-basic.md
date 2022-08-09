---
layout: single
title: 'Naming: cơ bản vẫn là tiếng Anh'
categories:
  - old
---

# Tiếng Anh

Trong phát triển phần mềm, việc giao tiếp với những lập trình viên khác (code, tạo design) thường được thực hiện với ngôn ngữ chính là tiếng Anh.

Sử dụng tiếng Anh chuẩn sẽ giúp người đọc hiểu ý nghĩa nhanh và dễ dàng hơn.

Ngược lại, sử dụng tiếng Anh không chuẩn sẽ giống như sử dụng tiếng Việt không dấu vậy, sẽ để gây ra hiểu lầm cho người đọc.

```
Ví dụ:

Hai người đang chat qua mạng với nhau, cô gái đùa hơi quá và không thấy phía bên kia trả lời lại. Một lúc sau chàng trai chát lại: “Co dien roi”.

Cô gái tức quá hỏi lại: “Anh dám nói tôi thế hả?”

Chàng trai ngỡ ngàng một lúc và trả lời lại: “Ben anh vua mat dien gio moi co”.
```

## Hỏi nhỏ: tìm chỗ sai trong những naming dưới

```
isEdit
isRun
isEnable
isRecieved
isNescesary
haveChild
viewOfFeatureScreen
ApiOfFeatureScreen
childrenViewModel
```

## Đáp án

```
isEdit                  --> isEdited | isEditing | isEditable
isRun                   --> isRan | isRunning | isRunnable
isEnable                --> isEnabled
isRecieved              --> isReceived
isNescesary             --> isNecessary
haveChild               --> hasChild | hasChildren
viewOfFeatureScreen     --> featureScreenView
ApiOfFeatureScreen      --> featureScreenApi
childrenViewModel       --> childViewModel
```

Đối với các biến biểu thị trạng thái, sau tiền tố is, has thì phải là một Tính từ.

Đối với các trợ từ như of, for, about thì ta nên tìm cách lượt bỏ các trợ từ này bằng cách đảo thứ tự chữ. Ví dụ:

```
viewModelOfMyScreen       --> myScreenViewModel
resultsOfQueryDatabase    --> queryDatabaseResults (chú ý chữ s trong results)
```

Và còn nhiều điểm khác nữa mà ta có thể cải thiện được bằng cách improve English skill của mình.

# Viết tắt

Tương tự với việc viết sai tiếng Anh, viết tắt không phù hợp sẽ để gây ra hiểu lầm cho người đọc, đem lại hậu quả đáng tiếc.

```
Ví dụ:

Tuấn chat với Sửu:
- Tuấn: thằng Dậu dạo này làm code bug quá! mày qua hd (*) lại nó nhé.
- Sửu: (hớn hở): ok mày, để tao hd (**) nó.

...Sửu chạy đi đánh Dậu!!

Lý do là tuỳ theo background của từng cá nhân mà cách hiểu sẽ khác nhau!
Tuấn: (*): hướng dẫn
Sửu: (**): hấp diêm
```

## Nếu vẫn muốn viết tắt, thì phải làm sao?

Trong thực tế, đối với một số biến thường xuyên lặp lại, ta sẽ muốn viết tắt chúng.

Tuy nhiên quy tắt viết tắt cần phải được thống nhất giữa team member. Ví dụ:

```
myDbConnection
featureScreenVC
topPageTb
```

Đối với hai biến `myDbConnection` và `featureScreenVC`, nếu dự án đã có quy định trong từ điển chung của dự án (glossary) là

```
Db = Database
VC = ViewController
```

Thì viết tắt như trên là ok.

Đối với `topPageTb`, Tb có thể mang rất nhiều nghĩa, ví dụ như: Table, Thumbnail, cho nên 99% là naming của biến trên sai.

Cách sửa: viết rõ tên biến

```
topPageTb --> topPageThumbnails
```

# Giải pháp kiểm tra tự động cho vấn đề viết sai tiếng Anh và viết tắt

Ta nên sử dụng một plugin kiểm tra chính tả trong source code và tiến hành sửa khi được plugin warning.

Đối với tài liệu kỹ thuật, nếu ta sử dụng in-web-editor (Confluence, Github Wiki, etc...) thì ta có thể sử dụng plugin kiểm tra chính tả và ngữ pháp [grammarly][grammarly].

[grammarly]: https://www.grammarly.com/
