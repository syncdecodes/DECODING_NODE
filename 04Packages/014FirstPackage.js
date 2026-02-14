// Unlike modules like os, path, filesync, fileasync and http where we dont need to manually install them to use their properties and functions
// To use a package we must install it, we installed lodash so now we can use its properties

const lod = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = lod.flattenDeep(items) // flattenDeep is a lodash method we can't use it without installing lodash
console.log(newItems)
console.log(items)

// installing dependecies we will use to learn node in this course "nodemon"
// "nodemon watch our files and restart our app"