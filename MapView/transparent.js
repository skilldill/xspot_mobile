const fs = require('fs');

const args = process.argv.slice(2);
const destPath = args[0];

fs.copyFile('./static/index.html', destPath + '/index.html', (err) => {
    if (err) throw err;
});

fs.copyFile('./static/script.js', destPath + '/script.js', (err) => {
    if (err) throw err;
});

fs.copyFile('./static/style.css', destPath + '/style.css', (err) => {
    if (err) throw err;
});