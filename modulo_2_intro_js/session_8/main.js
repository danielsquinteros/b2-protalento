// var notas = 40 + 60 + 70 + 10
// var total_notas = 4

// var promedio = notas / total_notas
// console.log(promedio)

// var notas = 20 + 30 + 70 + 10
// var total_notas = 4

// var promedio = notas / total_notas
// console.log(promedio)


// Función con nombre
function calculoPromedio(nota1, nota2, nota3, nota4){
    var sumaNotas = nota1 + nota2 + nota3 + nota4
    var totalNotas = 4
    var resultado = sumaNotas/totalNotas
    return resultado
}

var notasDaniel = calculoPromedio(20, 30, 40, 50)
var notasFelipe = calculoPromedio(30, 50, 40, 60)

console.log(notasDaniel)
console.log(notasFelipe)

// Función Anonima
// (function(){
//     alert('función auto invocada')
// }())


// Expresiones -> puedo asociar una función anonima a una variable
var suma = function(num1, num2){
    return num1 + num2
}
var resultado = suma(4, 4)
console.log(resultado)

var variableGlobal = 'Hola soy una variable global'
console.log(variableGlobal)

// Función anidada, la función 2 esta anidada a la función 1
function funcion1(){
    var variableLocal = 'Hola soy una variable local' // Es una variable local solo vive dentro la función
    var variableLocaaaaal = 'jejejeje'
    function funcion2(){
        console.log('Dentro de funcion 2', variableLocaaaaal)
    }
    funcion2()
    console.log('Dentro de funcion 1', variableLocal)
}

funcion1()
