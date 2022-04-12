const  fun = require ('./fun.js');
const path = require ('path');
const fs = require('fs');
const colors= require('colors');



const readline = require('readline');
const { exit } = require('process');
const interfazCaptura = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

interfazCaptura.question( colors.rainbow('ingrese la ruta '),function(resp){
   console.log(colors.yellow(`la ruta ingresada es: ${resp}`));
   const rutaexi = fun.fileExists(resp)
   if (rutaexi == false){
    console.log (colors.bgRed("No existe la ruta"))
    exit();
  }
  else {
  console.log(colors.green("La ruta existe:", rutaexi));
  
  }
  const absoluta = fun.convertPath(resp)
  console.log(colors.blue("la ruta absoluta es" +absoluta ));

const archiD =fun.archivos(resp);

if (archiD.isFile()){
console.log(colors.yellow("es un archivo"));
const xtension = fun.xtension(resp);
 if(xtension ==   '.md'){
   console.log(colors.america( 'es un archivo .md'));
 }else {
   console.log(colors.bgRed('No es un archivo .md'));
   exit();
 }
}
if (archiD.isDirectory()){
  const arrayMd = [];
  console.log(colors.bgRed("esto es un directorio"));
  const directory = fun.directory(resp).forEach(files => {
  const mdExtens = fun.xtension(files)
  if (mdExtens == '.md'){
    arrayMd.push(files);
   }
  });
  if (arrayMd == ''){
    console.log(colors.blue('este directorio no tiene archivos .md'));
  }else{
    console.log(colors.rainbow('Tiene archivos con extension .md'));
    console.log(arrayMd);
  }
  
};

  interfazCaptura.close();
});



