

const url = require('url');
const querystring = require('querystring');

var addr = 'https://search.naver.com/search.naver?where=nexearch&query=%EB%82%99%EB%82%9C&sm=top_hty&fbm=1&ie=utf8';
var parseUrl = url.parse(addr);

console.log(parseUrl.query);
console.log(querystring.parse(parseUrl.query));


