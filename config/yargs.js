const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Base de la tabla multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Opcion para ver en consola la tabla',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Hasta el final de la tabla',
    })
    .check((argv, options) => {

        if (isNaN(argv.base)) {
            throw 'Base es number'
        }
        return true;
    })
    .argv;


module.exports = argv;