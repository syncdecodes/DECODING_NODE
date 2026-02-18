const http = require('http')
const fileIO = require('fs')

const server = http.createServer((request, response) => {
    const stream = fileIO.createReadStream('./content/subcontent/1st.txt', { encoding: 'utf8' })
    stream.on('error', ()=>{response.end('Error fetching file data')} )
    stream.pipe(response)
})
server.listen(5000)

const fs = require('fs');
const readable = fs.createReadStream('./content/subcontent/input.txt');
const writable = fs.createWriteStream('./content/subcontent/output.txt');
readable.pipe(writable); // Data flows from 'input.txt' to 'output.txt'
// createWriteStream overwrites files by default because it uses the 'w' flag.

console.log('Working..')