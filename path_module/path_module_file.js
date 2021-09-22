const path = require('path');

const filepath = path.join('/content/','readme','test.txt');

// console.log(filepath);


const base = path.basename(filepath);

// console.log(base);

const absolute = path.resolve(__dirname,'content','readme','test.txt');
console.log(absolute);
