const { logger } = require('prompt');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result){
    let str = result.input
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === '+' || str[i] === '*' || str[i] === '-'){
            count +=1
        }
    }
    console.log(count);
})
