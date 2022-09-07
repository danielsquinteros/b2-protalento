var colores = ["amarillo", "blanco", "negro", "gris", "verde"]
colores[4] = 'aqua'

// Método lenght
// Cuantos elementos tiene mi arreglo
console.log(colores.length)

// Método push
// Agrega un elemento al final del arreglo
colores.push('naranja')


// Método pop
// Elimina un elemento al final del arreglo
colores.pop()

// Método unshift
// Agrega un elemento al principio del arreglo
colores.unshift('morado')

// Método shift 
// Elimina un elemento al principip del arreglo
colores.shift()

var cadenaTextoConNumeros = "10,20,30,40,50" // ["10", "20", "30", "40", "50"]
var arregloDeNumeros = cadenaTextoConNumeros.split(',')
console.log(parseInt(arregloDeNumeros[4]))
