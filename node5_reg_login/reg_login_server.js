const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const urlLib = require('url');
let user = {};

http.createServer((req, res) => {
    let str = '';
    req.on('data', data => {
        str += data;
    })
    req.on('end', () => {
        let obj = urlLib.parse(req.url, true);
        let url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
        console.log(GET);

        //判断是否是user接口，不是user接口都当作文件处理
        if(url == '/user'){
            res.writeHead(200,{
                "Content-Type":"text/plain;charset=utf-8"
                });
            switch(GET.act){
                case 'reg':
                // 1 用户名是否存在
                if(user[GET['name']]){ 
                    res.write('{"ok": false, "msg": "此用户已存在"}');
                }else {
                     // 2 插入数据
                    user[GET.name] = GET.pass;
                    console.log(user);
                    res.write('{"ok": true, "msg": "注册成功"}');
                }
                break;
                case 'login':
                // 1 用户名是否存在
                if(user[GET['name']]== null){
                    res.write('{"ok": false, "msg": "此用户不存在"}');
                 // 2 检查用户密码
                }else if(user[GET.name]!=GET.pass){
                    res.write('{"ok": false, "msg": "用户名或密码有误"}');
                }else{
                  res.write('{"ok": true, "msg": "登录成功"}');
                }
                break;
                default:
                  res.write('{"ok": false, "msg": "未知的act"}');
            }
            res.end();
        }else {
            //读取文件
            let file_name =  './www'+ url;
            fs.readFile(file_name, (err, data) => {
                if(err){
                    res.write('404');
                }else {
                    res.write(data);
                }
                res.end();
            })  
        }
        
    })
}).listen(8080);