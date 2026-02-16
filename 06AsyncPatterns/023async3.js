const fileIO = require('fs')

const util = require('util')

const readFilePromise = util.promisify(fileIO.readFile)
const writeFilePromise = util.promisify(fileIO.writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./content/subcontent/1st.txt', 'utf8')
        const second = await readFilePromise('./content/subcontent/2nd.txt', 'utf8')
        const fourth = await writeFilePromise('./content/subcontent/4th.txt','Hello this is fourth.txt')
        console.log(first)
        console.log(second)
    }
    catch (error) {
        console.log(error)
    }
}
start()
