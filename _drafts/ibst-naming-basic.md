---
layout: single
title: 'Naming: cơ bản'
categories:
  - improve-by-doing-simple-things
---

# Tiếng Anh

## Tìm chỗ sai trong những naming dưới

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

Trong qua trình phát triển phần mềm, việc giao tiếp với những lập trình viên khác trong code được thực hiện với ngôn ngữ là tiếng Anh.

Một đoạn code sử dụng tiếng Anh chuẩn sẽ giúp người đọc hiểu ý nghĩa của đoạn code nhanh và dễ dàng hơn.

Để dễ hình dung việc sử dụng tiếng Anh không chuẩn sẽ giống như việc sử dụng tiếng Việt không dấu vậy, sẽ để gây ra hiểu lầm cho người đọc.

```
Ví dụ:

Hai người đang chat qua mạng với nhau, cô gái đùa hơi quá và không thấy phía bên kia trả lời lại. Một lúc sau chàng trai chát lại: “Co dien roi”.

Cô gái tức quá hỏi lại: “Anh dám nói tôi thế hả?”

Chàng trai ngỡ ngàng một lúc và trả lời lại: “Ben anh vua mat dien gio moi co”.
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

Đối với các trợ từ như of, for, about thì nếu được ta nên tìm cách lượt bỏ các trợ từ này bằng cách đảo thứ tự như sau.

```
viewModelOfMyScreen       --> myScreenViewModel
resultsOfQueryDatabase    --> queryDatabaseResults (chú ý chữ s trong results)
```

Và còn nhiều điểm khác nữa mà mình mong mọi người sẽ chủ động tìm hiểu bằng cách improve kỹ năng tiếng Anh của mình.

# Viết tắt

Tương tự với việc viết sai tiếng Anh, viết tắt không phù hợp sẽ để gây ra hiểu lầm cho người đọc, đem lại hậu quả đáng tiếc.

```
Ví dụ:

lkhieu chat với ltrach:
- lkhieu: ptan dạo này làm code bug quá! mày hd (*) lại nó nhé.
- ltrach (hớn hở): ok mày, để tao hd (**) nó.

...ltrach chạy đi đánh ptan!!

Lý do là tuỳ theo background của từng cá nhân mà cách hiểu sẽ khác nhau!
lkhieu: (*): hướng dẫn
ltrach: (**): hấp diêm
```

Trong thực tế, đối với một số biến lặp đi lặp lại, ta sẽ muốn viết tắt chúng. Ví dụ:

```
myDbConnection
featureScreenVC
topPageTb
```

Tùy trường hợp mà các biến trên có thể được cho phép hoặc không. Cụ thể:

```
myDbConnection
featureScreenVC
```

- Nếu dự án đã có quy định trong từ điển chung của dự án (glossary) là

```
Db = Database
VC = ViewController
```

Thì biến trên là ok.

```
topPageTb
```

- Trong trường hợp này, Tb có thể mang rất nhiều nghĩa, ví dụ như: Table, Thumbnail, cho nên 99% là naming của biến trên sai. Cách sửa:

```
topPageTb --> topPageThumbnails
```

# Giải pháp cho vấn đề viết tắc và tiếng Anh

Sử dụng một plugin kiểm tra chính tả trong source code và tiến hành sửa khi được plugin warning.

Ví dụ trong VSCode, ta có plugin [Spell Checker][spell-checker] hỗ trợ tiếng Anh rất tốt.

Ngoài ra, đối với tài liệu kỹ thuật, do ta thường sử dụng in-web-editor (Confluence, Github Wiki, etc...) nên ta sẽ sử dụng plugin kiểm tra chính tả và ngữ pháp [grammarly][grammarly].

[spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[grammarly]: https://www.grammarly.com/

# Magic number

Trong code, magic number là những số, chuỗi string được ghi trực tiếp trong code mà không được assign giá trị trung gian.

Ví dụ:

```js
let taxableIncome = getTaxableIncomeOf(userName)
taxAmount =
  if (taxableIncome > 100) {
    return taxableIncome * 0.25
  } elsif (taxableIncome > 50 & taxableIncome <= 100) {
    return taxableIncome * 0.1
  } elsif (taxableIncome > 10 & taxableIncome <= 50) {
    return taxableIncome * 0.05
  } else {
    return 0
  }
```

Trong ví dụ trên thì `100, 50, 10, 0, 0.25, 0.1, 0.05` được gọi là magic number.
Đối với những lập trình viên mới tiếp cận dự án thì khi đọc những con số này, người đọc sẽ không hiểu được ý nghĩa của chúng và không hình dung được business logic từ đoạn code trên.
Giải pháp cho magic number là đặt biến trung gian.

Ví dụ đoạn code trên sau khi sửa lại:

```js
  const HIGHEST_TAX_RATE = 0.25
  const MEDIUM_TAX_RATE = 0.1
  const LOWEST_TAX_RATE = 0.05

  // Unit: million VND
  const HIGHEST_TAX_RATE_INCOME_THRESHOLD = 100
  const MEDIUM_TAX_RATE_INCOME_THRESHOLD = 50
  const LOWEST_TAX_RATE_INCOME_THRESHOLD = 10
  const NO_TAX = 0

  let taxableIncome = getTaxableIncomeOf(userName)
  taxAmount =
    if (taxableIncome > HIGHEST_TAX_RATE_INCOME_THRESHOLD) {
      return taxableIncome * HIGHEST_TAX_RATE
    } elsif (taxableIncome > MEDIUM_TAX_RATE_INCOME_THRESHOLD & taxableIncome <= HIGHEST_TAX_RATE_INCOME_THRESHOLD) {
      return taxableIncome * MEDIUM_TAX_RATE
    } elsif (taxableIncome > LOWEST_TAX_RATE_INCOME_THRESHOLD & taxableIncome <= MEDIUM_TAX_RATE_INCOME_THRESHOLD) {
      return taxableIncome * LOWEST_TAX_RATE
    } else {
      return NO_TAX
    }
```

## Naming magic number, tốt và xấu

- Naming magic number cần đảm bảo:
  - Thể hiện được ý nghĩa business của con số.
  - Dù giá trị của con số có thay đổi, ta không cần đổi name của biến.

Ví dụ:

```js
  //  Naming tốt
  const HIGHEST_TAX_RATE = 0.25
  const MINIMUM_PLAYTIME_TO_SAVE_HISTORY = 10

  const ITEMS_TO_DISPLAY_ON_TABLET = 12
  const ITEMS_TO_DISPLAY_ON_SP = ITEMS_TO_DISPLAY_ON_TABLET / 2 // Thể hiện được sự liên quan giữa tablet và smartphone

  // Naming không tốt
  const TWENTY_FIVE_PERCENT = 0.25
  const TEN_SECOND = 10

  const ITEMS_TO_DISPLAY_ON_TABLET = 12
  const ITEMS_TO_DISPLAY_ON_SP = 6 // Không thể hiện được sự liên quan giữa tablet và smartphone
```
