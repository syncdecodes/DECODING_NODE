// path is a built-in Node.js module that helps you work with file and folder paths

const path = require('path')
console.log(path.sep) // returns the separator used by our system. (window sep = \ and macOS/Linux = /)

const filePath = path.join('/01Intro', '/002global.js')
console.log(filePath) // path.join() just joins path segments and normalizes them. didn't return the absolute path until (__dirname, 'path1', 'path2')

const base = path.basename(filePath)
console.log(base) // gives the last part of the path

const absolute = path.resolve('01Intro', '001intro')
console.log(absolute) // path.resolve() creates an absolute path, starting from your current file’s directory (__dirname). even if __dirname is not provided.

const dirname = path.dirname('/a/b/c/file.js');
console.log(dirname) // __dirname is the full (absolute) path of the folder you are 'currently working in'

const extname = path.extname('index.html')
console.log(extname) // Gets the file extension.

/*
join sticks pieces together.
resolve figures out “where this path actually points to”.
*/

/* 
simple example -:

const path = require('path');
const fileIO = require('fs');

const filePath = path.join(__dirname, '..', 'john-smilga-express.js', 'navbar-app', 'index.html');

const data = fileIO.readFileSync(filePath, 'utf8');
console.log(data);

Go into a folder - cd .\foldername
Go back one level (to the parent directory) - cd..
Go back to home directory - cd ~ or cd
Go back to the previous directory you were just in - cd -
*/