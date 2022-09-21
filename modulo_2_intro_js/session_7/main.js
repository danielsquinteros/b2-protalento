// document.write(1 + '<br>')
// document.write(2 + '<br>')
// document.write(3 + '<br>')
// document.write(4 + '<br>')
// document.write(5 + '<br>')
// document.write(6 + '<br>')
// document.write(7 + '<br>')
// document.write(8 + '<br>')
// document.write(9 + '<br>')
// document.write(10 + '<br>')
// document.write(11 + '<br>')
// document.write(12 + '<br>')
// document.write(13 + '<br>')


// Ciclo While
var i = 1;
// va entrar al while hasta i sea menor o igual a 13
while(i <= 13){
    document.write(i + '<br>')
    i++
}

document.write('<br>')

// Ciclo Do While
// Este ciclo SI O SI se ejecuta al menos una vez
// aunque la condición no sea la correcta
var index = 14

do {
    document.write(index +  '<br>')
    index = index + 1 
} while (index <= 13)

document.write('<br>')

// Ciclo For
// Que vaya de 3 en 3
for(var idx = 0; idx <= 13; idx = idx + 3){
    document.write('Ciclo FOR -> Iteracion '+ idx +  '<br>')
}

document.write('<br>')

// 0
// 0 + 2 = 2
// 2 + 2 = 4
// 4 + 2 = 6
var meses = ['Enero', 'Febrero', 'Marzo',
'Abril', 'Mayo', 'Junio', 'Julio']
for(var i = 0; i < meses.length; i++){
    document.write(i, ' Ciclor For con arreglo ', meses[i]+  '<br>' )
}

document.write('<br>')

// Ciclo For Simple
// Break -> cortar ejecución dependiendo una condición
// Continue -> si existe cierto comportamiento saltalo o continua
var amigos = ['Fabian', 'Felipe', 'Fernando']
for(amigo in amigos){
    if(amigos[amigo] === 'Felipe'){
        break
    }
    document.write(' Ciclor For simple ', amigos[amigo] +  '<br>' )
}

document.write('<br>')

var animales = ['Perro', 'Gato', 'Conejo']
for(animal in animales){
    if(animales[animal] === 'Gato'){
        continue
    }
    document.write(' Ciclor For simple ', animales[animal] +  '<br>' )
}


var personas = [
    {
        nombre: 'Daniel',
        edad: 27
    },
    {
        nombre: 'Johan Vargas',
        edad: 20
    },
    {
        nombre: 'Cristian Angel',
        edad: 22
    },
    {
        nombre: 'Daniel Quimbayo',
        edad: 25
    },
]

// personas.length = 4
// i = 4
// i = 3
// i = 2
// i = 1
// i = 0

// Incremento
for(i = 0; i < personas.length; i = i + 1){
    if(personas[i].edad > 20){
        console.log(personas[i].nombre + ' es mayor a 20')
    }
}

// Decremento -> REVISAR
for(i = personas.length - 1; i >= 1; i = i - 1){
    if(personas[i].edad > 20){
        console.log(personas[i].nombre + ' es mayor a 20')
    }
}
