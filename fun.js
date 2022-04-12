const colors= require('colors');
const fs = require('fs');
const path = require ('path');



// captura si existen archivos 
const fileExists = (resp)=> fs.existsSync(resp);

//convertir la ruta en absoluta
const convertPath = (resp) => (path.isAbsolute(resp)? resp: path.resolve(resp));





module.exports.fileExists=fileExists
module.exports.convertPath=convertPath
  





