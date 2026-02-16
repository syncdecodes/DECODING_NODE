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

const start = async () => {
    try {
        const first = await getText('./content/subcontent/1st.txt').then(result => console.log(result))
        const second = await getText('./content/subcontent/2nd.txt')
        console.log(second)
    }
    catch (error) {
        console.log(error)
    }
}
start()