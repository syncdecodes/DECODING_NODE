// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated code (only share minimum)

const fx = require('./003function') // { fx: [Function: sayHI] }
const names = require('./004names')
const data = require('./005moduleExp');
require('./006fxAuto')

fx.sayHi("Dev")
fx.sayHi(names.john)
fx.sayHi(names.peter)
console.log(data)

console.log(names); // returns an object since we used curly brackets while exporting
console.log(fx)
// Note when we import a module we actually invoke it thats why when we imported 'require('./007fxAuto')', The function addValue automatically got invoked.
console.log("developer dev")