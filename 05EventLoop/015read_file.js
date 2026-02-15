const file = require('fs')
console.log('started first task')

file.readFile('./content/subcontent/1st.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log("completed first task")
})

console.log('starting next task')