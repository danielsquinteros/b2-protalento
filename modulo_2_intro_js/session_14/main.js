// Obtener elementos


// ; es igual a hacer un salto de linea
//getElementById -> obtengo elementos por id
const titulo = document.getElementById('titulo');
// console.log(titulo);

//Elements en plural -> Es método se prepara para más elementos
// por defecto en un array
// obtengo elemtnos por su clase
const parrafoDom = document.getElementsByClassName('parrafo')
// console.log(parrafoDom);

// Arreglo✋🏻  o el elemento en si❤️
const etiquetasH3 = document.getElementsByTagName('h3')
// console.log(etiquetasH3);

//Obtienen todos lo elementos por su clase y por su id
// All a que en el fondo vienen todos los elementos que tengan la clase parrafo
const parrafos = document.querySelectorAll('.parrafo, #titulo');
console.log(parrafos);

const titulos = document.querySelectorAll('#titulo');
console.log(titulos);


// Obtener elementos hijos DESDE EL PADRE
const container = document.getElementById('container')
// childElementCount -> Saber cuantos hijos tiene
console.log(container.children)

// Obtener el padre DESDE LOS HIJOS
// Arreglo✋🏻  o el elemento en si❤️
// Paso 1 - nos trae todos los elementos que tiene la class name
const parrafosAll = document.getElementsByClassName('parrafo')

// Paso 2 - selecciono el elemento
const parrafoSeleccionado = parrafosAll[0]

// Paso 3 - llamar al padre desde el hijo
// el método parentElement trae al padre llamandolo desde un hijo
const padre = parrafoSeleccionado.parentElement
console.log(padre);

//Modificando un elemento 
// SU HTML✅
// SU TEXTO✅
// AGREGAR CLASE DE CSS✅
// Primer manera -> Directamente desde innerHTML
// Segunda manera -> setAttribute


//HTML -------- Obtener div vacio 
const divVacio = document.getElementById('id-vacio')
// innerHTML agrego HTML a mi elemento que seleccine
divVacio.innerHTML = '<p>Hola estoy dentro del div</p>'
divVacio.setAttribute('class', 'background')

// TEXTO ------ Cambiar texto de un div creado
parrafoSeleccionado.textContent = '<p>Estoy cambiando el parrafo desde JS</p>'


// Crear un elemento desde 0, cuando no hay nada!
// método createElement -> el primer parametro es la etiqueta de html que utilizare
// cree el div
const divImage = document.createElement('div')
divImage.setAttribute('class', 'image')


// cree el img
const image = document.createElement('img')
image.setAttribute('src', 'https://picsum.photos/200/300')
image.setAttribute('alt', 'imagen al azar')

// appendChile al padre le estamos insertando un hijo
divImage.appendChild(image)

// Conectando div image con el DOM
container.appendChild(divImage)



// Eliminar Nodos  

// Para eliminar recomiendo trabajar con getElementById
// lo que esta dentro de removeChild es lo que quiero eliminar
const padreDiv = document.getElementById('padre')
const hijoHola = document.getElementById('hijo')

padreDiv.removeChild(hijoHola)

// Todas las formas para eliminar elementos HTML desde Javascript
// Accediendo al padre pero NO con getElementById ¿Se puede?
// Si el padre no tiene Id

// Para poder eliminar siempre tengo que buscar al PADRE
// Y en función del padre le paso el hijo que quiero eliminar

// ¿Necesariamente tengo que buscar al padre por id,no puede
// obtener el padre desde el hijo, y eliminar a mi hermano?

const sumar = () => {
    const number1 = document.getElementById('numero_1').value
    const number2 = document.getElementById('numero_2').value
    const suma = parseInt(number1) + parseInt(number2)
    alert(suma)
}


// mouseover -> si entro al button, se activa
// mouseout -> si entro y salgo, se activa
// click -> si hago click, se activa
// mousemove -> si mouse el mouse dentro del boton, se activa


const button = document.getElementById("button")
button.addEventListener('mouseout', ()=>{
    sumar()
})


const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'ingresa tu nombre')
console.log(input);

container.appendChild(input)