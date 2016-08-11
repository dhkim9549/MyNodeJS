var fs = require("fs");

fs.readFile('typeOf01.html', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    text = data.toString();
});

setTimeout(function() {
	console.log('>>>>>>>>>>>>>>>>>>> text = ', text);
}, 1000);

console.log("Program Ended");


