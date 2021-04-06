// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`)
// })
// console.log(process.argv)

// const oranges = ['橙子', '橙子']
// const apples = ['苹果']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// const doSomething = () => console.log('测试')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //做点事，并测量所需的时间。
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

new Promise((resolve, reject) => {
  throw new Error('错误')
})
  .catch(err => {
    throw new Error('错误')
  })
  .catch(err => {
    console.error(err)
  })