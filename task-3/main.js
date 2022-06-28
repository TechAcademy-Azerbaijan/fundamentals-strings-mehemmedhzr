const { logger } = require('prompt');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result){
    let verilen = result.input
    let twocount = 0
    let fivecount = 0
    for(let i = 0; i < verilen.length; i++){
        if(parseInt(verilen[i]) === 2){
            twocount = twocount + 1
        }
        if(parseInt(verilen[i]) === 5){
            fivecount = fivecount + 1
        }
    }
    if(twocount > fivecount){
        console.log(2);
    }
    else if(fivecount > twocount){
        console.log(5);
    }
    else{
        console.log('=');
    }
})
