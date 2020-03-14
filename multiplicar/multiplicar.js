const fs = require('fs');//->Paquete nativo de node
// const fs = require('express'); -> Paquete no nativo de node
// const fs = require('./fs'); -> Archivos nuestros
const colors = require('colors');

let listarTabla= (base, limite = 10) => {
    console.log('================================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================================='.green);
    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }
    var name = 'Marak';
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número `);
            return;
        }else if(!Number(limite)){
            reject(`El valor introducido ${limite} no es un número `);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) reject(err);
          resolve(`tablas/tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
