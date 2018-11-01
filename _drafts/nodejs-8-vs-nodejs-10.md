---
layout: single
title: So sánh Nodejs 8 và Nodejs 10
---

# Các function trong module `fs` đã được promisify sẵn trong module mới `fs/promises`

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
  const buffer = await fs.readFile(filePath);
  const content = buffer.toString('utf8')
  console.log(content);
};

fileHandling('./sample-text-file');
// => (node:10298) ExperimentalWarning: The fs.promises API is experimental
// => This is sample text file content
```

# Sử dụng V8 v6.6 làm engine

## Chức năng mới trong V8 v6.6

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

### Vế catch của try không còn yêu cầu parameter

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
      } catch {
        this.isValid = false;
      }
  }
}
```
