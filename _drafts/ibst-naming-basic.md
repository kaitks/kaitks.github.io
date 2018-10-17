---
layout: single
title: 'Improve code từ những việc đơn giản - Naming: cơ bản'
---


# Tiếng Anh

Tìm chỗ sai trong các đoạn code dưới

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

Trong lập trình, ngôn ngữ lập trình hỗ trợ chúng ta syntax để tương tác với phần cứng, nhưng khi tương tác với những lập trình viên khác, chúng ta đều sử dụng tiếng Anh. 
Một đoạn code sử dụng tiếng Anh chuẩn sẽ giúp người đọc hiểu ý nghĩa của đoạn code nhanh và dễ dàng hơn.
Để dễ hình dung việc sử dụng tiếng Anh không chuẩn sẽ giống như việc sử dụng tiếng Việt không dấu vậy.

Bài giải

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
Đối với các trợ từ như of, for, about thì nếu được ta nên tìm cách lượt bỏ các trợ từ này bằng cách đảo thứ tự như sau.

```
viewModelOfMyScreen       --> myScreenViewModel
resultsOfQueryDatabase    --> queryDatabaseResults (chú ý chữ s trong results)
```

# Viết tắt

Trong dự án, đối với một số biến lặp đi lặp lại, đôi khi ta sẽ muốn viết tắt chúng. Ví dụ như:

```
myDbConnection
featureScreenVC
topPageTb
```

Việc này tùy trường hợp mà có thể được cho phép hay không. Ví dụ đối với từng trường hợp:

`myDbConnection`
`featureScreenVC`
- Nếu dự án đã có quy định trong từ điển chung của dự án (glossary) là
```
Db = Database
VC = ViewController
```
Thì biến trên là ok.

`topPageTb`
- Trong trường hợp này, Tb có thể mang rất nhiều nghĩa, ví dụ như: Table, Thumbnail, cho nên 99% là biến trên sẽ sai. Cách sửa:
```
topPageTb --> topPageThumbnails
```