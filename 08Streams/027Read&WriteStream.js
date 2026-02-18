// createReadStream
// createReadStream is used to read data of a file sequentially, in chunks.
const fileIO = require('fs')
const stream = fileIO.createReadStream('./content/subcontent/1st.txt', { encoding: 'utf8', highWaterMark: 90000 })
stream.on('data', (result) => {console.log(result)})
stream.on('error', (err) => console.log(err))


// createWriteStream
// createWriteStream is used to write data to a file sequentially, in chunks.
const fs = require('fs');
const writeStream = fs.createWriteStream('./content/subcontent/output.txt',{ encoding: 'utf8' });
writeStream.write('Hello ');
writeStream.on('error', (err)=> console.log(err))

console.log('Working..')
