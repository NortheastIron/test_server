const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./files/text.txt');
const writeStream = fs.createWriteStream('./files/newtext.txt');
const compressStream = zlib.createGzip();


const readStream2 = fs.createReadStream('./files/newtext.txt');
const writeStream2 = fs.createWriteStream('./files/newtext2.txt');

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with Error...');
};

// readStream.on('data', (chunk) => {
//     console.log('---------');
//     writeStream.write('\n\n STREAM \n\n');
//     writeStream.write(chunk);
//     // console.log(chunk);
// });

readStream.on('error', handleError).pipe(compressStream).pipe(writeStream).on('error', handleError);

re
