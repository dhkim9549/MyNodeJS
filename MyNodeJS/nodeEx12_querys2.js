
const querystring = require('querystring');

var queryObj = { where: 'nexearch',
		  query: '낙난',
		  sm: 'top_hty',
		  fbm: '1',
		  ie: 'utf8' };


console.log(querystring.stringify(queryObj));
