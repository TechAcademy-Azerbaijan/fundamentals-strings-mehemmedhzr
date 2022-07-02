const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
let a = result.input;
let str = a.split("p");
let count = 0;
for(let i = 0; i < str.length; i++){
    if(count < str[i].length){
        count = str[i].length
    }
}
console.log(count);
});
