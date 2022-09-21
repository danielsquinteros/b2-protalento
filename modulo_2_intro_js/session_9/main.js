// Dos maneras de crear funciones

// Forma 1 - Función con nombre
function suma(num1, num2){
    var resultado = num1 + num2
    return resultado
}

// Forma 2 - Función anonima + expresión
var sumaOtraForma = function(num1, num2){
    var resultado = num1 + num2
    // console.log('holaaaaa, vengo yo antes del return')
    return resultado
}

var resultadoDeMiFuncionSuma = suma(5, 1)

// Imprimir el resultado para poder verlo
// console.log
// alert
// document.write


// console.log(sumaOtraForma(15, 0))


function Cocinar(ingrediente1, ingrediente2){
    return ingrediente1 + ' con ' + ingrediente2
}

// Dos formas de VER (yo sé que funciona) pero quiero verlo
// console.log(Cocinar('arroz', 'leche'))

var almuerzo = Cocinar('arroz', 'leche')
// document.write(almuerzo)


// Variables globales y locales
// globales -> pueden ser accedidas desde cualquier parte del código
// locales -> fueron creadas dentro de una función, PUEDEN SER ACCEDIDAS DESDE UNA FUNCIÓN O UNA FUNCIÓN ANIDADA


// Scope
var variableGlobal = 'Esta es una variable global'

function myFunction(){
    var variableLocal = 'Esta es una variable local'
    function myFunctionAnidada(){
        console.log('estoy en la función anidada', variableLocal)
    }
    myFunctionAnidada()
    console.log('estoy fuera de la funcion anidada', variableLocal)
}

myFunction()


var num3 = 20 // num3 es una variable local✋🏻 o global❤️




// var resultado = 10 -> INICILIZANDO
// resultado = 30 -> Re asignando

var nombre = 'Tomas'

function resta(){
    nombre = 'Daniel'
    console.log('SCOPE RESTA', nombre)
    function restaAnidada(){
        nombre = 'Felipe'
        console.log('SCOPE ANINDADA', nombre) // Esto  -10✋🏻  +10❤️
    }
    restaAnidada()
}
resta()

console.log('GLOBAL', nombre)

var edad = 29 // Inicializar o crear
edad = 18 // Re asignar
console.log(edad)