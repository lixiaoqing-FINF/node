const fs = require('fs');

fs.readFile('aaa.txt', (err, data) => {
    if(err) {
        console.log(err);
    }else {
        //console.log(data);
        console.log(data.toString()); //转化为字符串
    }
})