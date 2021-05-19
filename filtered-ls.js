const fs = require('fs')
const path = require('path')
const {promisify} = require('util')
const stat = promisify(fs.stat)

const dir = process.argv[2]
const filter = process.argv[3]

fs.readdir(dir,async (err,data)=>{
    for(let s of data){
        try{
            const stats = await stat(path.join(dir,`./${s}`))
            if(stats.isFile()){
                const ext = s.lastIndexOf('.') > -1 ? s.slice(s.lastIndexOf('.') +1) : ''
                if(ext === filter)
                    console.log(s);
            }
        } catch (err){

        }
    }
})
