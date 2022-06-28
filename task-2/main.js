const { logger } = require('prompt');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result){
    let verilen = result.input.split(',')
    let first = parseInt(verilen/100)
    let last = parseInt(verilen%10)
    if(first > last){
        console.log(first);
    }
    else if(last > first){
        console.log(last);
    }
    else{
        console.log('=');
    }
})
