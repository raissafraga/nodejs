var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello more!', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 