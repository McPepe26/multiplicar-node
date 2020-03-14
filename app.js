const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado: ${archivo.green}`);
            })
            .catch(err => {
                console.log(err);
            })
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


// let base = '9';
// console.log(process.argv);
// let argv2 = process.argv;
// console.log(argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

// crearArchivo(base)
// .then((archivo) => {
//     console.log(`Archivo creado: ${archivo}`);
// })
// .catch(err => {
//     console.log(err);
// })