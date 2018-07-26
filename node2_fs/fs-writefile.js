const fs = require('fs');

fs.writeFile('bbb.txt', 'liqingqing come on!', err => {
    console.log(err);
})