var fs = require("fs");

fs.readFile('typeOf01.htmla', 'utf8', function (err, data) {
    if(data != null) {
    	console.log(data);
    } else {
    	console.log(err); ///
    }
});

