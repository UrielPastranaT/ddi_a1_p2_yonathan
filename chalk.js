const chalk = require('chalk');

const log = console.log;

// dando estilo a una cadena
log(chalk.blue('Hola mundo!'));

// combinando con estilo y normal
log(chalk.green('Hola ') + 'Mundo' + chalk.red('!'));

// combinando varios estilos usando la API
log(chalk.blue.bgRed.bold('Hola Mundo!'));

// pasando multiples argumentos
log(chalk.blue('Hola', 'Mundo!', 'Desarrollo para ', 'Dispositivos ', 'Inteligentes '));

// anidando estilos
log(chalk.red('Hola', chalk.underline.bgGreen('mundo') + '!'));