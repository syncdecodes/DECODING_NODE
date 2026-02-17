const EevntEmitter = require('events');

const customEmmiter = new EevntEmitter()
customEmmiter.on('response', () => {
    console.log('data received')
})
customEmmiter.emit('response')


const customEmmiter2 = new EevntEmitter()
customEmmiter2.on('response', () => {
    console.log('logic1')
})
customEmmiter2.on('response', () => {
    console.log('logic2')
})
customEmmiter2.emit('response')


const customEmmiter3 = new EevntEmitter()
customEmmiter3.on('response', (user, id) => {
    console.log(`data received of ${user} with id: ${id}`)
})
customEmmiter3.on('response', () => {
    console.log(`fetching next data..`)
})

customEmmiter3.emit('response', 'dev', 9)