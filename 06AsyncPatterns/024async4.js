const fileIO = require('fs').promises

const start = async () => {
    try {
        const first = await fileIO.readFile('./content/subcontent/1st.txt', 'utf8')
        const second = await fileIO.readFile('./content/subcontent/2nd.txt', 'utf8')
        console.log(first)
        console.log(second)
    }
    catch (error) {
        console.log(error)
    }
}
start()