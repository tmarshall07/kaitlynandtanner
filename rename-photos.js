const fs = require('fs');

const thumbPath = './images';

const files = fs.readdirSync('./images');

for (let i = 0; i < files.length; i += 1) {
  fs.renameSync(`${thumbPath}/${files[i]}`, `${thumbPath}/${i}.jpg`);
}
