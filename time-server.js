const net = require('net')

net.createServer(function (socket){
    const time = new Date()
    const year = time.getFullYear()
    const mount = (time.getMonth() + 1 + '').padStart(2,'0')
    const date = (time.getDate() + '').padStart(2,'0')
    const hour = (time.getHours() + '').padStart(2,'0')
    const minute = (time.getMinutes() + '').padStart(2,'0')
    socket.write(`${year}-${mount}-${date} ${hour}:${minute}`)
    socket.end('\n')
}).listen(process.argv[2] || '8080')