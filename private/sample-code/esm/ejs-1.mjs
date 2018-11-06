import cjs2 from './cjs-2' // import is also synchronous !!!
import { sync1 } from './ejs-2.mjs'

cjs2.async1()
sync1()
console.log('Run after sync1')

// Import from other esm will require 'default' export
// import ejs2 from './ejs-2.mjs'
// => SyntaxError: The requested module './ejs-2.mjs' does not provide an export named 'default'
// ejs2.async1() // Will not run!

// This is ok
import ejs3 from './ejs-3.mjs' // ejs3 is the default export && == async1 function
import { async1 } from './ejs-3.mjs'

ejs3() // => ejs async1 run
async1() // => ejs async1 run
