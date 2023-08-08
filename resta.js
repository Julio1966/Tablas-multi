//File System
const fs=require('fs');

var colors = require('colors')

console.log('=================='.gray);
console.log('Resta'.red);
console.log('=================='.gray);
const base=1;
let salida='';
for (let i = 10; i <=1; i--) {
    salida+=(`${base} + ${i} = ${base+i}\n`).rainbow;
    
}
console.log(salida);
fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) throw err;
})