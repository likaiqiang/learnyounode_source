const fs = require('fs')

// function foo(){
//     let count = 0
//     const buffer =  fs.readFileSync(process.argv[2])
//     buffer.toString().split('').forEach(b=>{
//         if(b==='\n') count++
//     })
//     return count
// }

function foo(){
  let count = 0
    const t = new Buffer('\n')[0]
    const buffer = fs.readFileSync(process.argv[2])
    buffer.forEach(b=>{
        if(t === b) count ++
    })
    return count
}

console.log(foo());