const http = require('http');

http.createServer((req, res) => {
    let str  = '';
    //数据分段发送
    let i = 1;
    req.on('data', function(data) {
        console.log(`第${i++}次发送数据`) // 第1次发送数据
                                        // 第2次发送数据
        str += data;
    })

    req.on('end', function(){
        //console.log(str);
    })
}).listen(8080);