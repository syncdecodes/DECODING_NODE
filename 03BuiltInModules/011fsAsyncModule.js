const { readFile, writeFile } = require('fs')

console.log("start")

readFile('./content/subContent/1st.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result
    console.log(first)
    readFile('./content/subContent/2nd.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result
        console.log(second)
        writeFile('./content/subContent/6th.txt', 'Hello I am sixth.txt', (err, result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log("done with this task")
        })
    })
})

console.log("starting next task")

/* same code using promises async-await 

const { readFile, writeFile } = require('fs/promises');

console.log("start");

async function run() {
    try {
        const first = await readFile('./content/subContent/1st.txt', 'utf8');
        const second = await readFile('./content/subContent/2nd.txt', 'utf8');

        await writeFile('./content/subContent/6th.txt', 'Hello I am sixth.txt');

        console.log("done with this task");
    } catch (error) {
        console.log(error);
    }
}

run();

console.log("starting next task"); */