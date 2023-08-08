inquirer

const inquirer=require('inquirer');
const { async } = require('rxjs');
require('colors');
const preguntas=[
    {
        type:'list',
        name:'opcion',
        message:'Que desea hacer?',
        choices:[
            {
                value:1,
                name:`${'1.'.green}Buscar ciudad`
            },
            {
                value:2,
                name:`${'2.'.green}Historial`
            },
            {
                value:0,
                name:`${'0.'.green}Salir`
            },

        ]
    }

];

const inquireMenu=async()=>{
    console.clear();
    console.log('=================='.green);
    console,log("Seleccopne una opcion".white);
    console.log('=================='.green);
    const{option}=await inquirer.prompt(preguntas);
    return option;
}
const pausa=async()=>{
    const question=[
        {
            type:'input',
            name:'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput=async(message)=>{
    const question=[
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if (value.length===0) {
                    return 'Ingrese un valor';
                }
                return true;
            }
        }
];
const {desc}=await inquirer.prompt(question);
return desc;
}
const listarLugares=async(lugares=[])=>{
    const choices=lugares.map((Lugar,i)=>{
        const idx='${i+1}'.green;
        return{
            value:lugar.id,
            name: '${idx} ${lugar.nombre}'
        }
    });
    choices.unshift({
        value: '0',
        name: '0'.green + 'cancelar'
    });
    const preguntas=[{
        type: 'list',
        name: 'id',
        message: 'seleccione lugar:',
        choices
    }]
    const {id}=await inquirer.prompt(preguntas);
    return id;
}