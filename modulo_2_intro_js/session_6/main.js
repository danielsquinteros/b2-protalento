// Ciclo While
var index = 0
while(index < 11){
    index = index + 1
    console.log(index)
}

var arreglo = []
var userInput

//userInput
//""=="" -> !true -> false
//"hola"=="" -> !false -> true

console.log('resultad de mi condicional', !(userInput==""))
while(!(userInput=="salir")){
    userInput = prompt("Ingresa cualquier caracter");
    arreglo.push(userInput)
}

console.log('Introduciste estos valores', arreglo)