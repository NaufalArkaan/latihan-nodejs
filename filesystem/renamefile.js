const fs = require('fs');

fs.rename('example.txt', 'newExample.txt', (err) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File has been renamed successfully.');
});
