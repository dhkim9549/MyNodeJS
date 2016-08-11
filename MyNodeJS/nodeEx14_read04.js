var fs = require('fs');
try {
  var text = fs.readFileSync('nodeEx14_file01.js', 'utf8');
  console.log(text);
} catch(e) {
  console.log('Exception occured. Check the input file name.');
  console.log(e);
}

