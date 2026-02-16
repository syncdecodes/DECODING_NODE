const fileIO = require('fs')

function getText(path) {
    return new Promise((resolve, reject) => {
        fileIO.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

console.log(getText('./content/subcontent/1st.txt')) // returns a promise { <pending> }
getText('./content/subcontent/1st.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))