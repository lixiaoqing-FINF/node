const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    //get 
    let obj = urlLib.parse(req.url, true);
    const GET = obj.query;
    let url = obj.pathname;

    //post
    let str = '';
    req.on('data', data => {
        str += data;
    })

    req.on('end', ()=>{
        const POST = str;
        console.log(url, GET, POST);
    })

    //文件
    let file_name = './www' + url;
    fs.readFile(file_name, (err, data) => {
        if(err){
            res.write('404');
        }else {
            res.write(data);
        }
        res.end();
    })


}).listen(8080);