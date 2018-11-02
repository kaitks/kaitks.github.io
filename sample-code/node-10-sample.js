const fs = require('fs').promises;

const fileHandling = async(filePath) => {
  const buffer = await fs.readFile(filePath);
  const content = buffer.toString('utf8')
  console.log(content);
};

fileHandling('./sample-text-file');
// => (node:10298) ExperimentalWarning: The fs.promises API is experimental
// => This is sample text file content

// ---------------------------------------------------------------------------------  //

function /* This is a comment */ f() {
  const num = 10;
  console.log(num);
}

console.log(f.toString());
// => function /* This is a comment */ f() {
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
      } catch {
        this.isValid = false;
      }
  }
}

// ---------------------------------------------------------------------------------  //

try {
  // Gọi đến Nodejs API
} catch (error) {
  if (error.code == ERR_INVALID_URL_SCHEME) {
    // do somethingSCHEME
  } else {
    // do something else
  }
}
