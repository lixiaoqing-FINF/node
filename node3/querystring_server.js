const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
    let arr = req.url.split('?');
    let query = querystring.parse(arr[1]);
    console.log(query); // { user: 'liqq', pass: '123456' }
                        // {}

    res.write('qqqq');
    res.end();
}).listen(8181);
