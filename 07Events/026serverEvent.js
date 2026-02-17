const http = require('http')
const server = http.createServer((req, res)=>{
    res.end("Welcome to server1")
})
server.listen(5000)

// Using Event Emitter API
const server2 = http.createServer() // http.createServer() uses EventEmitter internally
// emits request event 
// subscribe to it / listen for it / respond to it
server2.on('request', (req, res)=>{
    res.end('Welcome to server2')
})
server2.listen(3000) // Each server must listen on a unique port If both use 5000 → Node throws: 
                     // Error: listen EADDRINUSE: address already in use :::5000