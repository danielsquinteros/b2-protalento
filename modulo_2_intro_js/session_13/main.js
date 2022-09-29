/* Obtener elementos */


// Obtener un elemento por id
const titulo = document.getElementById('titulo');
titulo.textContent = 'Otro titulo manipulando el DOM'

// Obtener elementos por clase
// Un arreglo de elementos, por si vienen más clases de .parrafo
const parrafo = document.getElementsByClassName('parrafo')
parrafo[0].textContent = 'Soy un parrafo nuevo'

//Obtener elementos por TagName
// Un arreglo, por que busca todos los elementos h2
const elementosHTML = document.getElementsByTagName('h2')
elementosHTML[0].textContent = 'Cambiando el subtitulo'


//Obtener elementos por su clase pero al primero que encuentre
const parrafo2Primero = document.querySelector('.parrafo-2')

//Obtener elementos por su clase pero a todos
const parrafo2Todos = document.querySelectorAll('.parrafo-2')

//Obtener elementos por su ID pero al primero que encuentre
const tituloH4Primero = document.querySelector('#titulo-h4')

//Obtener elementos por su ID pero a todos los que encuentre
const tituloH4Todos = document.querySelectorAll('#titulo-h4')


/* Modificar elementos */
//Primer paso - obtengo el elemento a través del Id
const box = document.getElementById('box')

//Segundo paso - le agregamos HTML
// innerHTML -> agrego HTML a mi elemento
box.innerHTML = '<p> <br> Hola <br> mundo</p>'
box.style.padding = '20px'
box.style.border = '5px solid black'

const formulario = document.querySelector('.formulario')
formulario.style.margin = '20px 0px 0px 0px'

const inputName = document.getElementById('nombre')
inputName.setAttribute('placeholder', 'Ingresa un nombre')
inputName.setAttribute('class', 'input')
inputName.setAttribute('type', 'text')


const idWrapper = document.getElementById('wrapper-nodo')
console.log('este es elemento -> lo que yo veo', idWrapper.childElementCount);
console.log('cuantos nodos tiene', idWrapper.childNodes.length);


// Agregando Nodos al DOM
// Paso 1 - Creo el nodo
const boxNew = document.createElement('div')
{/* <div></div> */}

// Paso 2 - Creo el nodo de texto
const textContent = document.createTextNode('Hola mundo desde un nodo')
// 'Hola mundo desde un nodo'

//Paso 3 - Añadir el nodo de texto al nodo div
boxNew.appendChild(textContent)
{/* <div>Hola mundo desde un nodo</div>  */}

//Paso 4 - Añadir una clase
boxNew.setAttribute('class', 'boxNew')
{/* <div class="boxNew">Hola mundo desde un nodo</div>  */}

idWrapper.appendChild(boxNew)