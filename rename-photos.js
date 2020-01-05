const fs = require('fs');

const thumbPath = './images/thumbs';

const files = fs.readdirSync('./images/thumbs');

for (let i = 0; i < files.length; i += 1) {
  fs.renameSync(`${thumbPath}/${files[i]}`, `${thumbPath}/${i}.jpg`);
}
