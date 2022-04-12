const colors= require('colors');
const fs = require('fs');
const path = require ('path');



// captura si existen archivos 
const fileExists = (resp)=> fs.existsSync(resp);

//convertir la ruta en absoluta
const convertPath = (resp) => (path.isAbsolute(resp)? resp: path.resolve(resp));
 
//verificar si es un archivo o directorio?
const archivos = (res)=> fs.statSync(res);

//verificar la extension del archivo 
const xtension = (resp)=> path.extname(resp);

// leer archivos dentro del directorio 
const directory = (resp) => fs.readdirSync(resp);




module.exports.fileExists=fileExists;
module.exports.convertPath=convertPath;
module.exports.archivos=archivos;
module.exports.xtension=xtension;
module.exports.directory=directory;



