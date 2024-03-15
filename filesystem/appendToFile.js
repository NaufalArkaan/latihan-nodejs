const fs = require('fs');

const newContent = '\nHere is some more interesting text.';

fs.appendFile('example.txt', newContent, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('Text has been appended successfully.');
});
