/* Variable asignada a un valor */
/* Operadores de asignación y tipos de datos */

/* Number */
var numero = 0
var decimal = 3.14
console.log(numero, "tipo de dato", typeof(numero))
console.log(decimal,"tipo de dato:" ,typeof(decimal))

/* String */
var nombre = 'Felipe'
var numeroTexto = '18'
console.log(nombre, "tipo de dato", typeof(nombre))
console.log(numeroTexto,"tipo de dato:" ,typeof(numeroTexto))

/* Boolean */
var verdadero = true
var falso = false
console.log(verdadero, "tipo de dato", typeof(verdadero))
console.log(falso,"tipo de dato:" ,typeof(falso))

/* Undefined  -> indefinido */
/* vaso no sabemos todavia si esta vacio */
/* esta indefinido porque no tiene ningun valor asignado */
var vaso
console.log(vaso, "tipo de dato", typeof(vaso))

/* Null o vacio */
/* sabemos que el vaso esta vacio */
var vaso = null
console.log(vaso, "tipo de dato", typeof(vaso))


/* Object o Objeto */
var animal = {
    nombre: "Perro",
    color: "Cafe",
    tieneDueño: false,
    edad: 5
}
console.log('El animal es un:', animal.nombre)
console.log('El animal tiene color:', animal.color)

/* Operadores matemáticos */
var numero1 = 2
var numero2 = 3

var resultadoSuma = numero1 + numero2
console.log('El resultado del a suma es', resultadoSuma)

var resultadoResta = numero2 - numero1
console.log('El resultado de la resta es', resultadoResta)

var resultadoMultiplicacion = numero1 * numero2
console.log('El resultado de la multiplicacion es', resultadoMultiplicacion)

var resultadoDivision = numero1 / numero2
console.log('El resultado de la division es', resultadoDivision)

var resultadoRestoDivision = numero1 % numero2
console.log('El resultado del resto de la division es', resultadoRestoDivision)

/* elevado = base ** exponente */
var resultadoExponencial = numero1 ** numero2
console.log('El resultado de la exponencial es', resultadoExponencial)

var nombreCompleto

var nombre1 = 'Daniel'
var apellido1 = 'Quinteros'
var espacio = ' '

console.log('¿Que tipo de datos es espacio?',typeof(espacio))
nombreCompleto = nombre1 + espacio + apellido1
console.log(nombreCompleto)


/* Operadores de Incremento y Decremento */
var numero3 = 10
var resultado1 = - 1 + numero3
console.log('Resultado1 es igual a:', resultado1)

/* ---- Decremento */
/* -- es igual a -1 */
var resultado2 = --numero3
console.log('Resultado2',resultado2)

/* ---- Incremento */
/* ++ es igual a +1 */
var resultado3 = ++numero3
console.log('Resultado3',resultado3)

var numero4 = 5
console.log('resultado negativo', numero4 - 10)
console.log(--numero4)
console.log(++numero4)
var resultado4 = --numero4 + ++numero4
console.log('Resultado4',resultado4)

/* Operadores relacionales */
/* Siempre van a devolver un valor boleano */
/* true, false */

var numero5
var numero6

numero5 = '5'
numero6 = 5

resultado6 = numero5 > numero6;
console.log('resultado6', resultado6)

resultado7 = numero5 < numero6;
console.log('resultado7', resultado7)

resultado8 = numero5 >= numero6
console.log('resultado8', resultado8)

/* 10 menor o igual que 5 */
resultado9 = numero5 <= numero6
console.log('resultado9', resultado9)

/* numero5 es igual a numero6 */
/* ==  -> compara el valor */
/* === -> compara el valor y el tipo de dato */ 
resultado10 = numero5 === numero6
console.log('resultado10', resultado10)

/* != son diferentes */
resultado11 = numero5 != numero6
console.log('resultado11', resultado11)

// var edadPrompt = prompt('Ingresa tu edad')
// /* tipo de dato string que pase a Number */
// var edadNumber = parseInt(edadPrompt)
// var mayorEdad = edadNumber >= 18
// // console.log(edadNumber, typeof(edadNumber))
// console.log('¿Es mayor de edad?', mayorEdad)

var texto3 = 'DevF'
/* todo en mayusculas to UpperCase */
/* todo en minisculas to LowerCase */
console.log(texto3.toUpperCase());
console.log(texto3.toLowerCase());

// var nombre1Prompt = prompt('Ingresa tu nombre')
// validacionNombre = nombre1Prompt.toLowerCase() == 'felipe'
// console.log('¿El nombre es Felipe', validacionNombre)

/* Operadores Lógicos */
/* Verifican booleanos */
// OR es O en español -> ||
// AND es y en espalol -> &&
// Not es no español -> !
/* OR, AND, NOT */

var operador1 = false || false
var operador2 = true || false
var operador3 = false || true
var operador4 = true || true
console.log(operador1)
console.log(operador2)
console.log(operador3)
console.log(operador4)

/* ¿Queremos saber si un numero es mayor que 10 o es menor que 3 */
var numeroOr = prompt('Ingresa un numero OR')
var numeroOrNumber = parseInt(numeroOr)
var numero_menor_3 = numeroOr < 3
var numero_mayor_10 = numeroOr > 10
console.log('=====', numero_menor_3 || numero_mayor_10)

/* ¿Queremos saber si un numero es mayor que 10 y es mayor que 30 */
var numeroOr = prompt('Ingresa un numero AND')
var numeroOrNumber = parseInt(numeroOr)
var numero_mayor_30 = numeroOr > 30
var numero_mayor_10 = numeroOr > 10
console.log('=====', numero_mayor_30 && numero_mayor_10)

var inversa = !false
console.log('===', inversa)

var inversaDeLaInversa = !!false
console.log('===', inversaDeLaInversa)