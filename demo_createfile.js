import fs from 'fs';

fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('Saved!');
});
