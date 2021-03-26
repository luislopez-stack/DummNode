//IMPORT LIBRERIA FILESYSTEM
const fs = require('fs');

const metodoCrearArchivo = (base = 1) => {

    console.log('===================');
    console.log('Table del', base);
    console.log('=================');
    let salida = "";
    for (let i = 0; i < 11; i++) {
        salida += `${base} x ${i} = ${ base * i }\n`;
    }

    //CREAR ARCHIVO
    fs.writeFile(`TABLA-${base}.txt`, salida, (err) => {
        if (err) throw err;
        return `TABLA-${base}.txt creada`;
    })

}

const crearArchivo = async(base, listar, hasta = 11) => {

    try {


        let salida = "";
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${ base * i }\n`;
        }

        if (listar) {
            console.log('===================');
            console.log('Table del', base);
            console.log('=================');
            console.log(salida);
        }


        //CREAR ARCHIVO
        fs.writeFileSync(`./salida/TABLA-${base}.txt`, salida)
        return `TABLA-${base}.txt`;

    } catch (err) {
        throw err;
    }

}




//METODOS PUBLICOS
module.exports = {
    //crearArchivo aputa a la funcion crearArchivo
    metodoCrearArchivo: metodoCrearArchivo,
    crearArchivo
}