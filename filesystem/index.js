const fs = require('fs');

const content = 'Hello, this is a file containing some interesting text.';

fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File has been created and text has been written successfully.');
});
