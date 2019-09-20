---
layout: single
---

# Cons

### Cannot know if the returned value could be null or not

```js
const products = await getProductsFromApi(params);
// Should we check for null in this case, or it will return empty array?
```

### Problem when dealing with string, number

```js
const programUniId = `${cpId}:v${programId}`; // expect to receive: `00001:v00001`
// If programId = 1, the above expected value is wrong
```

### Could not detect wrong import

```js
const { missSpelledFunction } = require('my-module');
missSpelledFunction() // error: could not invoke undefined
```

### Do not support default export statement

```js
module.exports = myFn; // default module function
module.exports.otherFn = otherFn; // wrong, this will attach otherFn to myFn
```

### Do not support null coalescing

```js
const myValue = calculateValue(params) ? calculateValue(params) : defaultValue; // long, duplicate
const myValue = calculateValue(params) ?? defaultValue; // shorter, but not available yet
```

### Wrong order of arguments will mess you up

```js
const myFn = (class, students) => {};
// myFn in action
myFn(students, class) // oops, my mistake. Should write a test for this?
```

### vscode support is not good

Ctr (Cmd) + Click will not take you directly to method definition.

Refactor function, module names is buggy.

Find usage by reference do not work.
