const students = [
    {
        name: "Daniel",
        age: 27,
        module: 'kata_intro_web'
    },
    {
        name: "Felipe",
        age: 27,
        module: 'kata_intro_web'
    },
    {
        name: "Johan",
        age: 20,
        module: 'kata_js'
    },
    {
        name: "Saul",
        age: 39,
        module: 'kata_js'
    },
    {
        name: "Darwin",
        age: 26,
        module: 'kata_js'
    },
]

const autos = [
    {
        marca: 'BMW',
        precio: 5000
    },
    {
        marca: 'AUDI',
        precio: 1000
    },
    {
        marca: 'NISSAN',
        precio: 1000
    },
]

//  Eddier, necesitamos ver cuanto dinero tendriamos si liquidamos todos nuestros autos
const liquidez = autos.reduce((total, auto) => {
    return total + auto.precio
}, 0)

console.log('la liquidez de la empresa es de:', liquidez)

// Iterado un arreglo método 1  -> recorro el arreglo
for(i = 0; i < students.length; i++){
    console.log('formato antiguo', students[i])
}

// Método forEach -> recorro TODO el arreglo, no responde nada
students.forEach((student)=> {
    console.log(student.name)
})

//Método map -> recorre TODO el arreglo 
// pero al terminar de recorrer el arreglo crea uno nuevo
const arrayOnlyNames = students.map((student) => {
    return student.name
})
console.log('map', arrayOnlyNames)


//Método filter
// recorre todo el arreglo, crea un arreglo nuevo pero el beneficio
// es que filtra en función de una condicion
// CONSIDERA A TODOS LOS QUE CUMPLEN LA CONDICION
const nombreSaul = students.filter((student) => {
    if(student.name === 'Saul'){
        return student.name
    }
})

console.log(nombreSaul)

const veinteaAños = students.filter((student) => {
    return student.module === 'kata_intro_web'
})

console.log('filter', veinteaAños)

// Método Find
// Crea un arreglo pero busca un elemento dentro del arreglo
// encontrar el elemento que cumple con la condicion
// Al primero que encuentra, y NO los demás
// SOLO CONSIDERA AL PRIMERO QUE CUMPLE LA CONDICION
const alumnosKataIntroWeb = students.find((student) => {
    return student.module === 'kata_intro_web'
})
console.log('find', alumnosKataIntroWeb)


// Método reduce
const numeros = [3, 10, 20, 4]
// primer parametro recibe una funcion
// segundo parametro defindo el valor inicial del acumulador
const totalReduce = numeros.reduce((total, numero)=> {
    return total + numero
}, 100)
console.log(totalReduce)

// total -> es el acumulador
// numero -> es el numero actual
// 0 -> el valor inicial del acumulador


//Método Some
// Verifica si un elemento existe en un arreglo, devuelve true o false
const existeJohan = students.some((student)=> {
    return student.name === 'Johan'
})

console.log('¿Johan existe? ', existeJohan)