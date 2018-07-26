const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    let file_name = './www'+ req.url;
    fs.readFile(file_name, (err, data) => {
        if(err) {
            res.write('404'); //这里请求不到暂且写404；
        }else {
            res.write(data);
        }
        res.end(); //res.end一定要写在这里
    })
    //res.end(); //res.end不能写在这里，因为fs.readfile是一步操作，写在外面会先执行res.end
});

server.listen(8080);