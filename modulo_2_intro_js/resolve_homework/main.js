// Ejercicio 1
// var nota1 = prompt('Ingresa la nota1')
// var nota2 = prompt('Ingresa la nota2')
// var nota3 = prompt('Ingresa la nota3')
// var promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/ 3
// console.log('Tu promedio es de', promedio);

// Ejercicio 2
// var inscritos = prompt('Ingresa el numero de inscritos al hackaton');
// var resto = parseInt(inscritos) % 5;
// if(resto === 0 || parseInt(inscritos) <= 5){
//     console.log('No se necesita ninguna mesa')
// } else {
//     console.log('Se necesitan mesas, porque hay ' + resto + ' personas sin puesto')
// }

// Ejercicio 3
alert('BIENVENIDO A Mortal Life P3');
var edad = parseInt(prompt('Ingresa tu edad'));
var estatura = parseInt(prompt('Ingresa tu estatura'));
if(edad >= 18){
    if(estatura >= 160){
        console.log('Si puedes entrar al juego');
    } else {
        console.log('No puedes entrar al juego porque mides menos de 160 cm');
    }
} else {
    console.log('No puedes entrar al juego porque eres menor a 18 años');
}
