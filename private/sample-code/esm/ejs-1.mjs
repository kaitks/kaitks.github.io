import cjs2 from './cjs-2' // import is also synchronous !!!
import { sync1 } from './ejs-2.mjs'

cjs2.async1()
sync1()
console.log('Run after sync1')

// // if imported ESM don't have default export, default import will throw Error
// // import ejs2 from './ejs-2.mjs'
// // => SyntaxError: The requested module './ejs-2.mjs' does not provide an export named 'default'
// // ejs2.async1() // Will not run!

// // This is ok
// import ejs3 from './ejs-3.mjs' // ejs3 is the default export && == async1 function
// import { async1 } from './ejs-3.mjs'
// ejs3() // => ejs async1 run
// async1() // => ejs async1 run

// // Import from CJS should be default import, otherwise it will throw Error
// import { async1 } from './cjs-2' // => SyntaxError: The requested module './cjs-2' does not provide an export named 'async1'
// async1()
