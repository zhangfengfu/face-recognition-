const fs = require('fs')

fs.stat('./test.txt',(err, stats) => {
  console.log(stats,'stats')
})


const notes = './test.txt'

const path = require('path')

let p = path.dirname(notes)
let c = path.basename(notes)
let ext = path.extname(notes)


let r = path.resolve(__dirname,'test.txt')

let j = path.join(__dirname, '..', 'text.txt')


// 读取文件

fs.readFile('./test.txt', 'utf8', (err, data)=>{
  if (err) {
    
  }
  console.log(data)
})

// fs.writeFile('./test.txt', '内容11', err=>{
//   if(err) return
// })

// fs.writeFile('./test.txt', '内容333', {flag: 'a+'}, err=>{
//   if(err) return
// })


let par =path.parse('/user/app/text.txt')
console.log(par,'par')




