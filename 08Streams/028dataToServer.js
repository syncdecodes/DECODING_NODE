// sending files data to server
const http = require('http')
const fileIO = require('fs').promises

// method 1 using readFile
const server = http.createServer(async (request, response) => {
    try {
        const text = await fileIO.readFile('./content/subcontent/1st.txt', 'utf8')
        response.write(text)
        response.end()
    }
    catch (err) {
        response.end('Error fetching data..')
    }
})
server.listen(5000)

// method 2 using stream - creatReadStream
const fileIO2 = require('fs')
const server2 = http.createServer((request, response) => {
    const fileStream = fileIO2.createReadStream('./content/subcontent/2nd.txt', { encoding: 'utf8' })
    fileStream.on('data', (result) => {
        response.end(result)
    }) // response.end() => response ended - no browsrer loading or waiting
    fileStream.on('error', () => {
        response.end('Error fetching file data')
    })
})
server2.listen(3000)

// Every HTTP response must be ended exactly once.(call, response.end() to end)

console.log('Working..')