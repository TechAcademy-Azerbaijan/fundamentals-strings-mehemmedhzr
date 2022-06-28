let s = "This is a cat sitting on a table"
let c = "t"
let res = s.toLowerCase()
let count = 0
for(let i = 0; i < res.length; i++){
    if(res[i] === c){
        count += 1
    }
}
console.log(count);
