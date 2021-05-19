const filter = require('./mymodule')

filter(process.argv[2],process.argv[3],(err,list)=>{
    if(!err){
        console.log(list.join('\n'));
    }
})