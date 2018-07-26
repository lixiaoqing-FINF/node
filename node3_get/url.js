const urlLib = require('url');

console.log(urlLib.parse('http://www.baidu.com?a=12&b=5&c=8'));
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: '?a=12&b=5&c=8',
//     query: 'a=12&b=5&c=8',
//     pathname: '/',
//     path: '/?a=12&b=5&c=8',
//     href: 'http://www.baidu.com/?a=12&b=5&c=8' }

console.log(urlLib.parse('http://www.baidu.com?a=12&b=5&c=8', true));
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: '?a=12&b=5&c=8',
//     query: { a: '12', b: '5', c: '8' },
//     pathname: '/',
//     path: '/?a=12&b=5&c=8',
//     href: 'http://www.baidu.com/?a=12&b=5&c=8' }


//参数为true时，query解析成json对象了