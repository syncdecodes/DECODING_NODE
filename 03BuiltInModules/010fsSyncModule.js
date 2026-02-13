// fs (File System) lets our Node.js program read, write, update, delete, and manage files and folders on our computer.


// const { readFileSync } = require('fs') // Or we can import only a specific method that we need.

const fs = require('fs') // We can import the entire 'fs' module to access all its methods.

console.log("start")

const first = fs.readFileSync('./content/subContent/1st.txt', 'utf8')
console.log(first)

const second = fs.readFileSync('./content/subContent/2nd.txt', 'utf8')
console.log(second)

const third = fs.writeFileSync('./content/subContent/3rd.txt', 'Hello I am third.txt and I am happy') // writeFileSync overwrites

const fourth = fs.writeFileSync('./content/subContent/4th.txt', '\nHello I am fouth and I am happy', {flag: 'a'}) // Now the content will be appended

const fifth = fs.writeFileSync('./content/subContent/5th.txt', 'Hello I am fifth.txt') // To create a new file

console.log("done with this task")
console.log("starting the next one")

// This is synchronous programming code executes line by line so if one line of code takes time to execute the rest will not execute until the previous one sets off 
// It causes delay in programming so we use asynchronous programming (readFile and writeFile)

// Important Note About Synchronous Code
// Using readFileSync and writeFileSync makes Node wait until the operation is finished.