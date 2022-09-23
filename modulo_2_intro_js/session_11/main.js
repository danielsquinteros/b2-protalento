console.log('Objeto literales')

const mascota = {
    nombre: 'Scott',
    edad: 5,
    apellido: 'Casavona',
    profesion: 'Programador'
}
// Forma 1
// console.log(mascota.nombre)
// console.log(mascota.edad)

// Forma 2
// console.log(mascota['nombre'])
// console.log(mascota['edad'])

// Desestructuracion Objecto ECMA6
// { } -> llaves
// [ ] -> corchetes
const { nombre, edad, apellido, profesion, pais = 'Pais No especificado'} = mascota
console.log(nombre, edad, apellido, profesion, pais)

//Desestructurar arreglo ECMA6
const persona = ['Daniel', 23, 'Chile']
console.log(persona)

console.log(persona[0])
console.log(persona[1])
console.log(persona[2])

const [ name, ,country ] = persona
console.log(name, country)