const fs = require('fs')
const {promisify} = require('util')
const path = require('path')
const stat= promisify(fs.stat)
const filter = (dir,filter,callback)=>{
    fs.readdir(dir,async (err,data)=>{
        if(err) return callback(err,[])
        const list = []
        try{
            for(let s of data){
                const stats = await stat(path.join(dir,`./${s}`))
                if(stats.isFile()){
                    const ext = s.lastIndexOf('.') > -1 ? s.slice(s.lastIndexOf('.') +1) : ''
                    if(ext === filter)
                        list.push(s)
                }
            }
        } catch (err){
            return callback(err,[])
        }
        callback(null,list)
    })
}
module.exports = filter