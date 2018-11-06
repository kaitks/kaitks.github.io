export const async1 = () => {
  setTimeout(() => {
    console.log('ejs async1 run')
  }, 1000)
}

export const sync1 = () => {
  console.log('ejs sync1 run')
}
