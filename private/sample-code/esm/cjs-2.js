const async1 = () => {
  setTimeout(() => {
    console.log('cjs async1 run')
  }, 1000)
}

const sync1 = () => {
  console.log('cjs sync1 run')
}

module.exports = {
  async1,
  sync1
}