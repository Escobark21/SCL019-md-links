const { mdLink } = require('./mdLink');

const args = process.argv;

const option = {};

if (args.some((x) => x === '--validate')) {
  option.validate = true;
}
if (args.some((x) => x === '--stats')) {
  option.stats = true;
}
const path = args[0] === 'mdLink' ? args[1] : args[2];

mdLink(path, option).then(() => {
  console.log();
}).catch((err) => {
  console.log(err);
});
