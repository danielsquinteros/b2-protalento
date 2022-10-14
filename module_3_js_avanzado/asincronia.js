// Asincronia
const request = require('request')

console.log('hola')

request('https://google.com', function(err, response, body){
	console.log(body);
})

console.log('adios');

// hola
// adios
// hola desde el setTimeOut