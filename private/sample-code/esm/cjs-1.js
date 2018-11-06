const cjs2 = require('./cjs-2') // require is always synchronous

async function main() {
  const ejs2 = await import('./ejs-2.mjs') // Currently the online way to import mjs is to put it into async function, with await keyword
  ejs2.async1()
}

cjs2.async1()
main()

// top level import will result in error !!!
// import ejs2 from './ejs-2.mjs' // => SyntaxError: Unexpected identifier
// import cjs2 from './cjs-2' // => SyntaxError: Unexpected identifier
// cjs2.async1()
// ejs2.async1()
