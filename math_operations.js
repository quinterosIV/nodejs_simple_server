/**
 ** Add method
 ** This method takes the query parameter from the url and response stream, in order to go throw the params
 ** and make the add operation, and to send the response on the response stream.
 **/
function add (query, response) {
  var suma = 0
  for (var propName in query) {
      var splitted = query[propName]
      if(isNumeric(splitted)) {
        //Ok, it's a number
        var number = Number(splitted)
        suma += number
      } else {
        //It's not a number, so we show an error message and sends to the client
        response.writeHead(400, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
  }
  //If everithing was OK, we send code 200 response, using json format
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({result:suma}))
}

function multiply(query, response) {
  let mult = 1
  for (let propName in query) {
    let splitted = query[propName]
    if(isNumeric(splitted)) {
      let number = Number(splitted)
      mult = mult*number
      console.log(mult);
      
    } else {
      response.writeHead(400, {'Content-Type': 'application/json'})
      response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
    }
  }
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({result:mult}))
}

function fib(query, response) {
  let num
  for (let propName in query) {
    num = query[propName]
    break
  } 
  if(!isNumeric(num)) {
    response.writeHead(400, {'Content-Type': 'application/json'})
    response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
    return
  }
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({result:fibonacci(Number(num))}))
}

function fibonacci(number) {
  if(number === 0)
    return 0
  else if(number === 1)
    return 1
  else
    return fibonacci(number-1) + fibonacci(number-2)
}

/**
 ** isNumeric returns true if input is a number. This can be done using the oppsite behaviour from isNaN function
 **/
function isNumeric(num) {
  //isNaN returns false if the input is a number, true otherwise
  return !isNaN(num)
}

//In this line we export the functions to be used in other javascript files. We must import this module with 'require' signature
module.exports = {
  add : add,
  multiply: multiply,
  fib : fib
}