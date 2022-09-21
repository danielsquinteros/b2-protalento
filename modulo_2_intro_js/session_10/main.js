// LET Y CONST

// Let y Const tienen el mismo SCOPE
// 1. LET y CONST no puede se re-inicializadas o re-declaradas (NUEVO)

// let nombre = 'Daniel'
// let nombre = 'Felipe'

// 2. LET si se puede modificar o re asignar
let nombre = 'Daniel'
nombre = 'Felipe'

//3. LET Puede cambiar el tipo de dato
nombre = 20

//4. CONST NO PUEDE SER REASIGNADO O MODIFICADO
const animal = 'Perro'
// animal = 'Gato' ERROR
console.log(animal)

//5. CONST  si es un array le puedo agregar más elementos
const instrumentos = []
instrumentos.push('Guitarra')
console.log(instrumentos)


// Función normal
var sumaNormal = function suma(num1, num2){
    return num1 + num2 
}

// Arrow function
const sumaECS6 = (num1, num2) => {
    return num1 + num2
}
// Acortar el número de lineas

// Parámetros por defecto
const sumaNew = (num1, num2 = 10) => {
    return num1 + num2
}

const resultado = sumaNew(20)
console.log(resultado)

//Rest operator 
// RECIBIR UN NUMERO INDEFINIDO DE PARÁMETROS
// LOS CONVIERTE A UN ARREGLO
const calcularNotas = (...notas) => {
    console.log(notas)
}

calcularNotas(10)


// Spread Operator le envie a una función un
// numero indefinido de datos
const notas = [10, 20, 20, 40, 50, 70]
calcularNotas(...notas)