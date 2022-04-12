const  fun = require ('./fun.js');
const path = require ('path');
const fs = require('fs');
const colors= require('colors');

const readline = require('readline');
const interfazCaptura = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

interfazCaptura.question( colors.green('ingrese la ruta '),function(resp){
   console.log(colors.gray(`la ruta ingresada es: ${resp}`));
   const rutaexi = fun.fileExists(resp)
   if (rutaexi == false){
    console.log (colors.red("No existe la ruta"))
  }
  else {
  console.log(colors.yellow("La ruta existe:", rutaexi));
  
  }
  const absoluta = fun.convertPath(resp)
  console.log(colors.blue("la ruta absoluta es" +absoluta ));
  interfazCaptura.close();
});



