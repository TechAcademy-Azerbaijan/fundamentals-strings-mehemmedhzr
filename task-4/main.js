const { logger } = require('prompt');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result){
    let str = result.input
    let sentence = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === '!' || str[i] === '.'){
            sentence += 1
        }
    }
    console.log(sentence);
})
