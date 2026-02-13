// http module lets us create a basic web server without installing anything else.

const http = require('http')

// const server = http.createServer((request, response) => {
//     console.log(request)
//     response.write('welcome to our home page')
//     response.end()
// })
// server.listen(5000)

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('welcome to our home page')
    }
    else if (request.url === '/about') {
        response.end('Welcome to our about section')
    }
    // If the requested url does not exist then default response -:
    else {
        response.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})
server.listen(5000)

// code explaination -:

/*
http.createServer((request, response) => {})

This creates a server.

request → information about what the user is asking

response → how you will reply

Every time someone visits your server 
(like http://localhost:5000/), this function runs. 




request.url

This property tells us which page the user is visiting.

Examples:

URL the user visits	request.url value
http://localhost:5000/	'/'
http://localhost:5000/about	'/about'
http://localhost:5000/contact	'/contact'

So we check the URL and respond differently.




server.listen(5000)

This tells our server:

“Start listening on port 5000.”

So the website is available at:

http://localhost:5000/

*/