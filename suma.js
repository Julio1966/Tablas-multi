//File System
const fs=require('fs');

var colors = require('colors')

console.log('=================='.gray);
console.log('Sumaa'.blue);
console.log('=================='.gray);
const base=1;
let salida='';
for (let i = 1; i <=20; i++) {
    salida+=(`${base} + ${i} = ${base+i}\n`).rainbow;
    
}
console.log(salida);
fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) throw err;
})