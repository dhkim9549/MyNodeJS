var fs = require('fs');

fs.writeFile('test2.txt', 'hahahaha', function(err) {
  if (err) {
	 console.log(err);
  } else {
    console.log('It\'s saved! aaaa');
  }
});