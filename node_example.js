const http = require('http')
const url = require('url')
const math_ops = require('./math_operations')

var server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url, true)
  //console.log(parsedUrl);
  if(parsedUrl.pathname === '/') {
    console.log('no mano')
  }

  switch(parsedUrl.pathname) {
    case '/suma' :
      math_ops.add(parsedUrl.query, response)
      break
    case '/multiplicacion' :
      math_ops.multiply(parsedUrl.query, response)
      break
    case '/fibonacci' :
      math_ops.fib(parsedUrl.query, response)
      break
  }
})

server.listen(8080)
