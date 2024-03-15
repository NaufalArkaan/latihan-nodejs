const fs = require('fs');

fs.unlink('newExample.txt', (err) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File has been deleted successfully.');
});
