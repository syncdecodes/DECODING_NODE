const http = require('http')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('welcome to home page')
    }
    else if (request.url === '/about') {
        // BLOCKING CODE!!!!
        for (let i = 0; i < 200; i++) {
            for (let j = 0; j < 200; j++) {
                console.log(`${i} ${j}`)
            }
        }
        // just check the srever loading time.. bcs of nested for loop which is blocking the code
        // that is why we shoud always try to set up our code asynchronously
        response.end('welcome to about page')
    }
    else {
        response.end("Error page")
    }
})

server.listen(5000, () => {
    console.log("Server is listening on port 5000")
})
// 2:54:54