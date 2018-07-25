const http = require('http');

http.createServer((req, res) => {
    //console.log(req.url); //  /aaa?user=liqq&pass=123456
                         //  /favicon.ico
    // let GET = {};
    // let url= "";
    // if(req.url.indexOf('?') != -1) {
    //     let arr = req.url.split('?');
    //     url = arr[0];
    //     let arr1 = arr[1].split('&');
    //     //console.log(arr1); [ 'user=liqq', 'pass=123456' ]
    //     for(let i =0; i <arr1.length; i++){
    //         let arr2 = arr1[i].split('=');
    //         GET[arr2[0]]=  arr2[1];
    //     }
    // }else {
    //     url = req.url;
    // }
    let url= '';
    let GET = {};
    if(req.url.indexOf('?') != -1){
        let arr = req.url.split('?');
        url = arr[0];
        let arr1 = arr[1].split('&'); //['user= lqq','pass=12333']
        for(let i = 0; i<arr1.length; i++){
            let arr2 = arr1[i].split('=');
            GET[arr2[0]] = arr2[1];
        }
    }else {
        url = req.url;
    }
    console.log(url, GET);

    res.write('aaa');
    res.end();
}).listen(8080);