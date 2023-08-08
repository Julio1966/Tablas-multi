const fs=require('fs');
const creararchivo=async(base=7)=>{
    try{
    console.log('==================');
console.log(`Tabla del ${base}==`);
console.log('==================');
let=salida='';
for (let i = 1; i <=20; i++) {
    salida+=(`${base} x ${i} = ${base*i}\n`);
}
console.log(salida);
fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
 // console.log(`tabla-${base}.txt creado`);
 return `tabla-${base}.txt`;

}catch(err){
    throw err;
}

}
module.exports={
   creararchivo
}
