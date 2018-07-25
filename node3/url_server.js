const http = require('http');
const urlLib = require('url');

http.createServer((req, res) => {
    let url = req.url;
    let obj = urlLib.parse(url, true);
    console.log(obj.pathname, obj.query);
    //    /aaa { user: 'liqingqing', pass: '123' }
    //    /favicon.ico {}
    res.write('liqq'); 
    res.end();
}).listen(8080)