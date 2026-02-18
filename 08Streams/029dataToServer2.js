const http = require('http')
const fileIO = require('fs')

const server = http.createServer((request, response) => {
    const stream = fileIO.createReadStream('./content/subcontent/1st.txt', { encoding: 'utf8' })
    stream.on('data', (chunk)=>{response.write(chunk)} ) // Browser is waiting for the chunk to be ended - page loading....
    stream.on('end', ()=>{response.end()} ) // response ended
    stream.on('error', ()=>{response.end('Error fetching file data')} )
})
server.listen(5000)

console.log('Working..')