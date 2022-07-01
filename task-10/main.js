const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
 let a = result.input
let firstindex = a.indexOf(" ", 1);
let lastindex = a.lastIndexOf(" ");
if(firstindex === -1){
    console.log(firstindex);
}
else if(firstindex !== -1){
    console.log(firstindex);
    console.log(lastindex);
}
});
