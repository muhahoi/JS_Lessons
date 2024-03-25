//* импортируем myModul

const myModule = require('./main');
// расширение .js для  main можно  не писать. Webpack всё соберет правильно

const myModuleInstance = new myModule();

myModuleInstance.hello(); // Hello!
myModuleInstance.goodbye(); // Bye!
