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
// alert('BIENVENIDO A Mortal Life P3');
// var edad = parseInt(prompt('Ingresa tu edad'));
// var estatura = parseInt(prompt('Ingresa tu estatura'));
// if(edad >= 18){
//     if(estatura >= 160){
//         console.log('Si puedes entrar al juego');
//     } else {
//         console.log('No puedes entrar al juego porque mides menos de 160 cm');
//     }
// } else {
//     console.log('No puedes entrar al juego porque eres menor a 18 años');
// }


const database = [
    {
       name: "Camilo Garrido",
       module: "kata_js",
       exams: "10,20,30,50,70,100",
       is_active: false,
       arreglo: [10, 20, 30, 40]
    },
    {
       name: "Nahara Casanova",
       module: "kata_intro_web",
       exams: "15,50,70,100",
       is_active: true,
       arreglo: [10, 40]
    },
    {
       name: "Felipe Plaza",
       module: "kata_intro_web",
       exams: "70,20,30,50,70,100,00",
       is_active: true,
       arreglo: [ 30, 40]
    },
    {
       name: "Franco Martinez",
       module: "kata_intro_web",
       exams: "30,100,100,100,70,100",
       is_active: true,
       arreglo: [10]
    },
    {
       name: "Francisca Fuentes",
       module: "kata_js",
       exams: "40,100,30,50,70,100",
       is_active: true,
       arreglo: [10, 40]
    },
    {
       name: "Diego Angulo",
       module: "kata_js",
       exams: "00,30,55,90,100",
       is_active: true,
    },
]
// var alumnosInactivos = []
// var alumnosActivos = []

// for(i = 0; i < database.length; i++){
//     const name = database[i].name
//     const is_active = database[i].is_active
//     if(is_active === false){
//         alumnosInactivos.push(name)
//     } else {
//         alumnosActivos.push(name)
//     }
// }

// for(i = 0; i < database.length; i++){
//     console.log(database[i].name)
//     const arreglo = database[i].arreglo
//     for(idx = 0; idx < arreglo.length; idx++){
//         console.log(arreglo[idx])
//     }
// }


for(i = 0; i < database.length; i++){
    // el arrego sera igual a un arreglo vacio si viene undefined
    const { name, module, exams, is_active, arreglo = []} = database[i]
    console.log(name, arreglo)
}
