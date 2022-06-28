const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result){
  let verilen = result.input.split(',')
  let birinci = parseInt(verilen[0])
  let ikinci = parseInt(verilen[1])
  let ucuncu = parseInt(verilen[2])
  console.log(Math.min(birinci,ikinci,ucuncu));  
})
