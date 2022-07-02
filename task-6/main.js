const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
let a = result.input;
let arr = a.split(" ");
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] !== "" && arr[i] !== "!" && arr[i] !== "," && arr[i] !== "."){
        count++
    }
}
console.log(count);
});
