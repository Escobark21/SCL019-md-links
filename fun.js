const colors= require('colors');
const fs = require('fs');
const path = require ('path');
const https = require('https');
const url = require('url')



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

// lee los links dentro del archivo .md 
const readFile = (resp) => fs.readFile(resp, 'utf-8', (err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      const Regular = /(https?:\/\/)(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-a-z0-9()!@:%_\+.~#?&\/\/=]*)/gi
      const  url = data.match(Regular);
      console.log(colors.magenta(url));
      // aca se le dice en caso de... la promesa haga esto
      const promesa = validatLink(url[0]);
      promesa.then((linkstatus)=>{
          console.log(linkstatus)
      })
      console.log(promesa)
      return url;
    }
  });
  // conocer el status del link por medio de la promesa
  function validatLink(link) {
    return new Promise((resolve) => {
      const options = {
        method: 'HEAD',
        host: url.parse(link).host,
        port: 80,
        path: url.parse(link).pathname,
      };
  
      const req = https.request(options, (res) => {
        const Data = {
          linkname: link,
          Code: res.statusCode,
          status: res.statusCode <= 399,
        };
        resolve(Data);
      });
  //escucha la promesa
      req.on('error', (error) => {
        console.error(error);
        const newData = {
          linkname: link,
          status: false,
        };
        resolve(newData);
      });
  
      req.end();
});
} 





module.exports.fileExists=fileExists;
module.exports.convertPath=convertPath;
module.exports.archivos=archivos;
module.exports.xtension=xtension;
module.exports.directory=directory;
module.exports.readFile=readFile;
module.exports.validatLink=validatLink;



