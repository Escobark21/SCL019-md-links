const fun = require('./fun.js');
const { exit } = require('process');
const readline = require('readline');
const colors= require('colors');

const mdLink = (path, option) => {
  //console.log();
  return new Promise(() => {
     let arrayMD = [];
    
    const interfazCaptura = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    interfazCaptura.question(colors.rainbow('Ingrese la ruta '),
      function (resp) {
        console.log(colors.yellow(`La ruta ingresada es: ${resp}`));
        const rutaexi = fun.fileExists(resp)
        if (rutaexi == false) {
          console.log(colors.bgRed("No existe la ruta"))
          exit();
        }
        else {
          console.log(colors.green("La ruta existe:", rutaexi));

        }
        const absoluta = fun.convertPath(resp)
        console.log(colors.blue("La ruta absoluta es" + absoluta));

        const archiD = fun.archivos(resp);

        if (archiD.isFile()) {
          console.log(colors.yellow("Es un archivo?"));
          const xtension = fun.xtension(resp);
          if (xtension == '.md') {
            console.log(colors.america('Si un archivo .md'));
            fun.readFile(resp);
            //fun.validatLink(resp);
            // console.log(validatLink)
          } else {
            console.log(colors.bgRed('No es un archivo .md'));
            exit();
          }
        }
        if (archiD.isDirectory()) {
          const arrayMd = [];
          console.log(colors.bgRed("Esto es un directorio"));
          const directory = fun.directory(resp).forEach(files => {
            const mdExtens = fun.xtension(files)
            if (mdExtens == '.md') {
              arrayMd.push(files);
            }
          });
          if (arrayMd == '') {
            console.log(colors.blue('Este directorio no tiene archivos .md'));

            //console.log(contar(arrayMd));
          } else {
            console.log(colors.rainbow('Tiene archivos con extension .md'));
            console.log(arrayMd);
          }

          interfazCaptura.close();
        };
    });
  })
};
module.exports = { mdLink };