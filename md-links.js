const fun = require('./fun.js');


const mdLink = (path, options) => {
  console.log();
  return new Promise((resolve) => {
    let arrayMD = [];
    if (path !== undefined) {
      fun.existPath(path).then(() => {
        const answer = !fun.pathAbsolute(path) ? fun.pathTranfAbsolute(path) : path;
        return answer;
      })
        .then((answer1) => {
          if (!fun.isFile(answer1)) throw new Error('No puede ingresar una carpeta');
          if (fun.xtension(answer1)) {
            arrayMD = functions.read(answer1);
          } else {
            throw new Error('El archivo no tiene extensión .md');
          }
          return arrayMD;
        }).then((arrayLink) => {
          const promiseArr = arrayLink.map((url) => functions.verifityLink(url));
          return Promise.all(promiseArr);
        })
        .then((arrayJson) => {
          if (options.validate && options.stats) {
            functions.stats(arrayJson);
            functions.validate(arrayJson);
          } else {
            if (options.stats) {
              functions.stats(arrayJson);
            }
            if (options.validate) {
              functions.validate(arrayJson);
            }
          }
          resolve(arrayJson);
        })
        .catch((err) => {
          console.log(err);
          if (err.code === 'ENOENT') {
            console.log('Path no encontrada');
          } else {
            console.log(err.message);
          }
        });
    } else {
      console.log('no ingresó ruta');
    }
  });
};

module.exports = { mdLink };
