// const secondFile = require('./secondfile');

// const {userName, sayHi} = require('./secondfile');
// console.log(sayHi('ARARAT'));

// const os = require('os');

// console.log(os.platform(), os.release());

//urok 4

// const fs = require('fs');
//
// fs.readFile('./text.txt', 'utf-8', (error, data) => {
//     console.log('data', data);
//     console.log('err', error);
//
//     fs.mkdir('./files', () => {
//         fs.writeFile('./files/text2.txt', `${data}, NEW VERSION`, () => {
//             console.log('zapis proshla uspeshno');
//         });
//     });
// });
//
//
// setTimeout(() => {
//     if (fs.existsSync('./files/text2.txt')) {
//         fs.unlink('./files/text2.txt', (err) => {
//             err ? console.log('err1', err) : null;
//         });
//     }
// }, 5000);
//
//
// setTimeout(() => {
//     if (fs.existsSync('./files')) {
//         fs.rmdir('./files', (err) => {
//             err ? console.log('err2', err) : null;
//         });
//     }
//
// }, 7000);
