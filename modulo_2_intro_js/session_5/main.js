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


var deportes = ["futbol", "tennis", "basquetball", "ciclismo", "montañismo"]
// Método Slice
// NO MODIFICA EL ARRAY ORIGINAL
// .slice(posición_incial) -> en este caso considera todo para adelante
// .slice(posición_incial, posición_final - 1)
console.log('Linea 35---->', deportes)
var deportesSlice = deportes.slice(0, 2)
console.log(deportesSlice)

// Agregar otro elemento a deportes
deportes.push("ultimate")
console.log('le agrego un elemento a deportes', deportes)


largoElemento = deportes.length
console.log('largo del arreglo:', largoElemento)

elementoSeleccionado = deportes[deportes.length - 1]
console.log('seleccionado', elementoSeleccionado)


//Método Splice
// SI MODIFICA EL ARRAY ORIGINAL
// Eliminar o agregar elementos a mi arreglo
console.log('Arreglo original', deportes)
// 0 -> no borres el elemento que ya estaba en la posición 2
deportes.splice(0, 0, "natacion")
console.log('editado', deportes)

// Método Sort -> ordenados alfabeticamente!
console.log('deportes ordenando A-Z',deportes.sort())

// Array original
var numeros = [100, 250, 3, 1, 0, 20, 42, 50]

// Ordenado de mayor a menor
var numerosMayorAMenor = numeros.sort(
    function(a, b){
        return b - a
    }
)
console.log('Numeros', numeros)

// Ordenado de menor a mayor
var numerosMenorAMayor = numeros.sort(
    function(a, b){
        return a - b
    }
)
console.log('Numeros', numeros)


// Método reverse
console.log('Reverso',
    numeros.reverse()
)
// Método concat -> uno estos dos arreglos
var verduras = ['Cebolla', 'Tomate']
var frutas = ['Manzana', 'Pera']
var otrasVerduras = ['Perejil']

var listaDeCompras = verduras.concat(frutas).concat(otrasVerduras)

console.log('listaDeCompras', listaDeCompras)