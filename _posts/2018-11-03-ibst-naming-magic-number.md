---
layout: single
title: 'Naming: magic number'
categories:
  - old
---

# Magic number

Trong code, magic number là những số, chuỗi string được ghi trực tiếp trong code mà không được assign giá trị trung gian.

Ví dụ:

```js
const taxableIncome = getTaxableIncomeOf(userName)
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

Giải pháp cho magic number là assign magic number vào biến trung gian.

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

  const taxableIncome = getTaxableIncomeOf(userName)
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

Naming magic number cần đảm bảo:

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
