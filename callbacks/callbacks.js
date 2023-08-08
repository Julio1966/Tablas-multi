//setTimeout(()=>{
  //  console.log('Hola');
//},1500);
const UsuarioByID=(id)=>{
    const usuario={
    id, callback,
    nombre:"Julio"
}
setTimeout(()=>{
    console.log(usuario)
},1500)
}
getUsuarioByID(10, ()=>{
    console.log("hola");
});