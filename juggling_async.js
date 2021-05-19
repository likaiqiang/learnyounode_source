const http = require("http");
// const https = require("https");

const foo = ()=>{
    const list = []
    const arr = process.argv.slice(2)
    // const arr = ['https://www.baidu.com','https://www.sina.com']
    return new Promise((resolve,reject)=>{
        arr.reduce((acc, url,index) => {
            return acc.then(() => {
                return new Promise((reso) => {
                    let str = ''
                    http.get(url, (response) => {
                        response.on('data', buffer => {
                            str += buffer.toString()
                        })
                        response.on('end', () => {
                            list.push(str)
                            reso()
                            if(index === arr.length-1) resolve(list)
                        })
                    })
                })
            })
        }, Promise.resolve())
    })
}
foo().then(list=>{
    console.log(list.join('\n'));
})