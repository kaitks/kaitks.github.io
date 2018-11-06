---
layout: single
title: Sử dụng ES Module (ESM) trong Nodejs
---

# Lời nói đầu

Hiện nay những module Commonjs đang là de-facto standard trong thế giới Nodejs. Tuy nhiên vì nhiều lý do về tương thích, Commonjs vẫn chưa thể hỗ trợ được asynchronous loading.

Vì thế, để hướng đến 1 tương lai isomorphic, nơi mà cả backend và frontend đều có thể sử dụng module theo cùng 1 cơ chế asynchronous thì core team của Nodejs đã đưa support ES Module vào trong core.

Hi vọng động thái này sẽ giúp cộng đồng Nodejs nhận thức được phương hướng phát triển các module trong tương lai: ESM.

Bài viết có rất nhiều code, nên để dễ theo dõi, mình khuyến khích các bạn tham khảo thêm source code tại đây nhé.

## Phân biệt CJS và ESM trong Nodejs

|                              | CJS                                        | ESM                                     |
| ---------------------------- | ------------------------------------------ | --------------------------------------- |
| Extension                    | .js                                        | .mjs                                    |
| Default Export               | exports.module = myModule                  | export default myModule                 |
| Named Export                 | exports.module.myFunction = myFunction     | export const myFunction = () => { ... } |
| Default Import               | const myModule = require('myModule')       | import myModule from 'myModule'         |
| Named Import                 | const { myFunction } = require('myModule') | import { myFunction } from 'myModule'   |
| Support                      | Nodejs all version                         | Experimental in Nodejs 10               |
| Asynchronous loading support | No                                         | Yes                                     |
| Dynamic loading support      | No                                         | Yes                                     |

## Trong CJS module (.js): require CJS, import ESM

Sử dụng CJS: ta sử dụng require như bình thường.

Sử dụng ESM: là async, bắc buộc phải import trong async function.

```js
const cjs2 = require('./cjs-2') // require is always synchronous

async function main() {
  // Currently the online way to import ESM is to put it into async function, with await keyword
  const ejs2 = await import('./ejs-2.mjs')
  // Did you realize that this wil also lead to dynamic module loading support ;)
  ejs2.async1()
}

cjs2.async1()
main()
```

### Lưu ý

Không thể sử dụng import ở top level.

Không thể sử dụng require với ESM.

```js
// top level import will result in error !!!
import ejs2 from './ejs-2.mjs' // => SyntaxError: Unexpected identifier
import cjs2 from './cjs-2' // => SyntaxError: Unexpected identifier
cjs2.async1()
ejs2.async1()

// require ESM will result in error!!!
const ejs2 = require('./ejs-2.mjs') // => Error [ERR_REQUIRE_ESM]: Must use import to load ES Module
ejs2.async1()
```

## ESM (.mjs): import CJS, ESM

Sử dụng CJS: ta sử dụng import. Chỉ có thể import default.

Sử dụng ESM: ta cũng sử dụng import. Tuy nhiên để import default thì bắc buộc phía module export phải có export default.

```js
import cjs2 from './cjs-2' // import is also synchronous !!!
import { sync1 } from './ejs-2.mjs'

cjs2.async1()
sync1()
console.log('Run after sync1')
```

### Lưu ý

Không như CJS, import default trong ESM đòi hỏi phía module được import phải cung cấp export default

```js
// This is ok
import ejs3 from './ejs-3.mjs' // ejs3 is the default export && == async1 function
import { async1 } from './ejs-3.mjs'
ejs3() // => ejs async1 run
async1() // => ejs async1 run

// // if imported ESM don't have default export, default import will throw Error
import ejs2 from './ejs-2.mjs'
// => SyntaxError: The requested module './ejs-2.mjs' does not provide an export named 'default'
ejs2.async1() // Will not run!
```

Trong ESM, import CJS bắc buộc phải là default import, ngoài ra sẽ bị lỗi.

```js
// Import from CJS should be default import, otherwise it will throw Error
import { async1 } from './cjs-2' // => SyntaxError: The requested module './cjs-2' does not provide an export named 'async1'
async1()
```
