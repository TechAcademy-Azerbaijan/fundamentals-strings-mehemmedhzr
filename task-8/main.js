const { logger } = require('prompt');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result){          // introduction to algorithms
    let str = result.input   
    let str1 = str.split(' ')
    for(let i = 0; i < str1.length; i++){
        str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
    console.log(str1.join(' '));
})
