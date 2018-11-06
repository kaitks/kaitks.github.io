---
layout: single
title: So sánh Nodejs 8 và Nodejs 10
categories:
  - nodejs
---

# Tại sao nói tới Nodejs 10 vào lúc này

Kể từ 2018-10-30 Nodejs 10 chính thức trở thành phiên bản Nodejs được cam kết hỗ trợ lâu dài (LTS - Long time support).

Đối với đội phát triển, điều này đồng nghĩa với việc có thể tự tin nâng cấp từ Nodejs 8 lên Nodejs 10 mà không cần phải lo lắng về tính lâu dài, ổn định của nền tảng mới.

![support cycle of nodejs](https://github.com/nodejs/Release/raw/master/schedule.png)

## Các function trong module `fs` đã được promisify sẵn trong module mới `fs/promises`

Ở Nodejs 8 thì các function async trong module fs không hỗ trợ promise.

Khi muốn dùng các function này dưới dạng promise thì ta phải tiến hành promisify thủ công.

```js
// Nodejs 8
const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);

const fileHandling = async(filePath) => {
  const buffer = await fsReadFile(filePath);
  const content = buffer.toString('utf8')
  console.log(content);
};

fileHandling('./sample-text-file');
// => This is sample text file content
```

Ở Nodejs 10, các function này đã được promisify sẵn trong module `fs/promises`. Ta không cần tự promisify nữa.

```js
// Nodejs 10
const fs = require('fs').promises;

const fileHandling = async(filePath) => {
  const buffer = await fs.readFile(filePath); // đã được promisify sẵn!
  const content = buffer.toString('utf8')
  console.log(content);
};

fileHandling('./sample-text-file');
// => (node:10298) ExperimentalWarning: The fs.promises API is experimental
// => This is sample text file content
```

## Sử dụng V8 v6.6 làm engine

### Hàm async đã nhanh hơn, gần bằng với promise raw

![async speed improvement](https://cdn.auth0.com/blog/nodejs-10-new-changes-deprecations/async-generator.png)

### Promise cũng nhanh hơn ~ 10%

![promise speed improvement](https://cdn.auth0.com/blog/nodejs-10-new-changes-deprecations/promise.png)

### Array.reduce đã nhanh hơn ~ 10x lần

![array.reduce speed improvement](https://cdn.auth0.com/blog/nodejs-10-new-changes-deprecations/array-reduce.png)

## Tích hợp npm v6

Tốc độ sẽ nhanh hơn ~ 17x lần so với phiên bản npm năm ngoái. Đã có thể so sánh được với yarn.

## Error đã được bổ sung thêm nhiều mã code hơn

Trước đây, đối với một số trường hợp logic try ... catch sẽ được thực hiện như sau

```js
// Nodejs 8
try {
  // Gọi đến Nodejs API
} catch (error) {
  if (error.message == 'Invalid url scheme') {
    // do something
  } else {
    // do something else
  }
}
```

Việc này dẫn đến nhiều rủi ro, ví dụ như gõ sai. Vì thế để error handling được xử lý dễ hơn, core team của Nodejs đã cố gắng thêm error code vào tất cả chức năng của core API.

Bây giờ ta có thể thực hiện logic try ... catch như sau

```js
// Nodejs 10
try {
  // Gọi đến Nodejs API
} catch (error) {
  if (error.code == ERR_INVALID_URL_SCHEME) {
    // do something
  } else {
    // do something else
  }
}
```

Bạn có thể xem thêm danh sách mã code tại [đây](https://nodejs.org/docs/latest-v10.x/api/errors.html)

## Hỗ trợ thử nghiệm ES Module (ESM)

ESM đã được xác định là phương hướng tương lai của Nodejs.

Để biết ESM là gì, và sử dụng ra sao mời các bạn xem thêm tại bài viết [Sử dụng ES Module (ESM) trong Nodejs]({% post_url 2018-11-06-use-es-modules-in-nodejs %})

## Chính thức hỗ trợ N-API (WIP)

Giúp tương tác với code C++ dễ hơn.

## Hỗ trợ các chuẩn bảo mật mới (WIP)

Support TLS 1.3 đã trở nên dễ dàng hơn.

## Thay đổi chức năng, syntax

### Thay đổi hành vi Function.prototype.toString()

Ở Nodejs 8, comment và khoản trắng sẽ bị xoá.

```js
// Nodejs 8
function /* This is a comment */ f() {
  const num = 10;
  console.log(num);
}

console.log(f.toString());
// => function f() {
// =>   const num = 10;
// =>   console.log(num);
// => }
```

Ở Nodejs 10, comment và khoản trắng vẫn được giữ.

```js
// Nodejs 10
function /* This is a comment */ f() {
  const num = 10;
  console.log(num);
}

console.log(f.toString());
// => function /* This is a comment */ f() {
// =>   const num = 10;
// =>   console.log(num);
// => }
```

### Vế catch của try không còn yêu cầu error parameter

Ở Nodejs 8, đôi khi ta không muốn sử dụng parameter error trong catch.

```js
// Nodejs 8
class Image {
  constructor(buffer) {
      this.isValid = true;
      try {
        doSomethingMayFail();
      } catch (error) {
        this.isValid = false;
      }
  }
}
```

Trong Nodejs 10, ta có thể bỏ parameter error.

```js
// Nodejs 10
class Image {
  constructor(buffer) {
      this.isValid = true;
      try {
        doSomethingMayFail();
      } catch { // gọn hơn!
        this.isValid = false;
      }
  }
}
```
