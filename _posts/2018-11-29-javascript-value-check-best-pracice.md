---
layout: single
title: Kinh nghiệm kiểm tra giá trị của biến trong javascript
---

Javascript là một dynamic language, và trong thiết kế ngôn ngữ có một số điểm đặc biệt khác với các ngôn ngữ khác như:

- Sự xuất hiện của `undefined` bên cạnh `null`
- Hỗ trợ chuyển kiểu thông minh (!) hay còn gọi là `Type coercion`

Việc hiểu không rõ các khái niệm trên có thể dẫn đến những bug tiềm ẩn xảy ra ở runtime. Bài viết này nhằm mục đích tổng hợp và giải thích sâu hơn về vấn đề này.

## Sự khác nhau giữa `undefined` và `null`

Undefined nghĩa là đã được khai báo, nhưng chưa được gắn giá trị.
Null là giá trị. Null chỉ xuất hiện khi được gán.
Ví dụ:

```js
const a;
console.log(a) // => undefined

const b;
b = null;
console.log(b) // => null

function sample(c) {
  return c
}
sample() // => undefined
```

## Hỗ trợ chuyển kiểu thông minh

Trong javascript có hỗ trợ tự động chuyển kiểu khi so sánh bằng infix operator như `==`, `+`, `-`, `*`, `/`, `>`, `<`. Tuy nhiên hành vi của việc chuyển kiểu này hơi khó nhớ, và nếu lạm dụng thì sẽ làm cho code khó hiểu.

Ví dụ:

```js
1 == '1'                 // => true
true == 1                // => true
[] == []                 // => false
true + false             // => 1
"number" + 15 + 3        // => 'number153'
15 + 3 + "number"        // => '18number'
null == ''               // => false

...
```

Ta có thể thấy sự phức tạp của việc chuyển kiểu tự động này. Vì thế thay vì sử dụng chuyển kiểu thông minh như trên, lời khuyên của mình là tránh hoàn toàn việc sử dụng các hành vi trên trong quá trình code (trừ một trường hợp mà mình sẽ nêu ở dưới).

Ngoài ra, để đảm bảo code không bị lỗi, ta có thể áp dụng thêm một số quy ước:

- Khi so sánh, chỉ sử dụng toán tử `===`. Toán tử này sẽ không tự động chuyển kiểu khi so sánh.

```js
1 === '1'             // => false
```

- Kiểm tra kiểu của giá trị đầu vào trước khi sử dụng.

```js
var type = require('type-detect');

function sample(thisShouldBeString) {
  if (type(thisShouldBeString) !== 'string') {
    // error handling
  }

  // continue process with string
}
```

## Null safety trong javascript

Khi code, ta có thể sử dụng default value của argument và ta nghĩ là ta đã an toàn

```js
function myProudFunction(money = Money(9999)) {
  money.giveWife();
}
```

nhưng thật ra ta đã nhầm, vì default value sẽ không được set trong trường hợp argument có giá trị null!

```js
myProudFunction();
// => Happy wife! Wife have received $9999

myProudFunction(null);
// => Angry wife! Can not give null to wife!
```

An toàn hơn là ta check null như sau

```js
function myProudFunction(money) {
  if (money == null) {        // will handle both `null` and `undefined`!
    money = Money(9999);
  }

  money.giveWife();
}
```

## Kiểm tra array rỗng

Trong javascript, array là một object, vì thế array sẽ không so sánh được với nhau.

```js
[] === [];       // => false
[] == [];        // => false
```

Để kiểm tra array rỗng, ta dùng hàm `Array.isArray` kết hợp với property `length`

```js
const results = [];
Array.isArray(results);   // => true
results.length            // => 0

// Check for empty array

if (!Array.isArray(results) && results.length === 0) {
  error_message = 'No result found!';
}
// continue process
```

Trong thực tế, ta có thể gặp việc kiểm tra array không phải rỗng đơn giản như sau:

```js
if (!results) {
  error_message = 'No result found!';
}
// continue process
```

nhưng việc kiểm tra như trên không đầy đủ, ví dụ như nếu `results === 1` thì hàm ngăn lỗi trên sẽ không được thực thi, còn đoạn xử lý sau đó sẽ bị lỗi. Vì thế, mình không khuyến khích sử dụng cách này.

## Các trường hợp khác

Việc kiểm tra giá trị parameter đầu vào ngoài việc ngăn lỗi, còn là một hình thức để giúp người đọc code hiểu kiểu giá trị đầu vào. Ví dụ:

```js
if (results) {
  // do something
}
// => Đúng nhưng không tốt. Results có thể là array, string, number ... Người đọc code sẽ không hiểu rõ results là gì.

// Ngược lại, nếu ta kiểm tra cụ thể thì người đọc sẽ hiểu kiểu của results!
if (results !== '') {  // hiểu! results phải là string, xém nữa tưởng results là array rồi!
  // do something
}
```

## Thư viện hỗ trợ

Việc kiểm tra kiểu trong javascript cũng có một số trường hợp đặc biệt (edge case), vì thế khi muốn kiểm tra kiểu của biến đầu vào, mình khuyến khích các bạn sử dụng thư viện thứ ba như [type-detect](https://github.com/chaijs/type-detect). Bạn sẽ giải phóng được một vùng bộ nhớ để lưu giữ dự liệu quan trọng hơn, ví dụ như bài viết này (mình đùa thôi).

Bài viết đến đây là hết! Chúc các bạn ngày làm việc hiệu suất!
