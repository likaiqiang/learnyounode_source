function foo(){
    return process.argv.slice(2).reduce((acc,s,index)=>{
        const n = parseInt(s)
        return acc + (isNaN(n) ? 0 : n)
    },0)
}
console.log(foo())