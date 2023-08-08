const fs=require('fs');
const {creararchivo}=require('./Multiplicar');
console.clear();
const [,,arg3='base=7']=process.argv;
const [,base]=arg3.split('=');
//console.log(process.argv);
console.log(arg3);

//const base=5;
creararchivo(base)
    .then(nombrearchivo=>console.log(nombrearchivo,'creado'))
    .catch(err=>console.log(err))
