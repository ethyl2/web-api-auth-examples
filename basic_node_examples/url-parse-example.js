const url = require('url')
const address = 'http://localhost:8080/default.htm?year=2022&month=december'
const parsedUrl = url.parse(address, true)
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)

const query = parsedUrl.query

console.log(query.month)
console.log(query.year)
