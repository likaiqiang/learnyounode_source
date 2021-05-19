const http = require('http')

http.get(process.argv[2],res=>{
    let s = ''
    res.on('data',buffer=>{
       let str = buffer.toString()
        s+=str
    })
    res.on('end',()=>{
        console.log(s.length)
        console.log(s)
    })
})