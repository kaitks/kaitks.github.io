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

// ---------------------------------------------------------------------------------  //

function /* This is a comment */ f() {
  const num = 10;
  console.log(num);
}

console.log(f.toString());
// => function f() {
// =>   const num = 10;
// =>   console.log(num);
// => }

// ---------------------------------------------------------------------------------  //

const doSomethingMayFail = () => {
  throw Error;
}

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

// ---------------------------------------------------------------------------------  //

const string = "  Node rocks!  ";

console.log(string.trimStart());
console.log(string.trimEnd());
console.log(string.trim());
