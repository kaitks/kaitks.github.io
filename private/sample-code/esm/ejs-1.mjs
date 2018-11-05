import cjs2 from './cjs-2' // import is also synchronous !!!
import { sync1 } from './ejs-2.mjs'

cjs2.async1()
sync1()
console.log('Run after sync1')


