const cjs2 = require('./cjs-2') // require is always synchronous

async function main() {
  // Currently the online way to import ESM is to put it into async function, with await keyword
  const ejs2 = await import('./ejs-2.mjs')
  // Did you realize that this wil also lead to dynamic module loading support ;)
  ejs2.async1()
}

cjs2.async1()
main()

// top level import will result in error !!!
// import ejs2 from './ejs-2.mjs' // => SyntaxError: Unexpected identifier
// import cjs2 from './cjs-2' // => SyntaxError: Unexpected identifier
// cjs2.async1()
// ejs2.async1()

// require ESM will result in error!!!
// const ejs2 = require('./ejs-2.mjs') // => Error [ERR_REQUIRE_ESM]: Must use import to load ES Module
// ejs2.async1()
