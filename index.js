//const fun = require('./fun.js');
//const path = require('path');
//const fs = require('fs');
//const colors = require('colors');

const { mdLink } = require('./md-links.js');

const resp = process.argv;

const option = {};
let ruta = '';

if (resp.some((x) => x === '--validate')) {
  option.validate = true;
}
if (resp.some((x) => x === '--stats')) {
  option.stats = true;
}
//const path = resp[0] === 'mdLink' ? resp[1] : resp[2];
if (resp[0] === 'mdLink'){
  ruta = resp [1];
}else{
  ruta = resp[2];
}

mdLink(ruta, option).then(() => {
  console.log();
}).catch((err) => {
  console.log(err);
});