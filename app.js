//IMPORT LIBRERIA
const { number } = require('yargs');
const { metodoCrearArchivo, crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();





console.log(argv);
console.log('base:', argv.base);

//ARGUMENTOS DESDE CONSOLA
//console.log(process.argv);
//const [, , arg3 = 'base=1'] = process.argv;
//const [, base = 5] = arg3.split('=');
//console.log(arg3);
//console.log(base);








//FUNCION CON PROMESA DE TABLA
//metodoCrearArchivo(tabla);
crearArchivo(argv.base, argv.listar, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));