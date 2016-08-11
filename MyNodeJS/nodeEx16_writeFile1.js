var fs = require('fs');

try {
	fs.writeFileSync('test2.txt', 'test');
} catch(e) {
	console.log('Exception occured while writing file.');
	console.log(e);
}
