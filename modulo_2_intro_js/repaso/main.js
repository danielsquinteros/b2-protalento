// Repaso de funciones

// La función es conjunto de instrucciones que realizan para chacer algo
// es no repetir código

// Estructura
// function nombre_funcion(parametro1, parametro2){
//     return resultado
// }

// La función multiplicar tiene dos parámetros
function multiplicar(num1, num2){
    resultado = num1 * num2
    return resultado
}

const resultadoMultiplicar =  multiplicar(20, 30)
console.log(resultadoMultiplicar);


//Tarea en clases
// Crear una función que calcule el volumen de un cubo
function volumenCubo(lado){
    const resultado = lado ** 3
    return resultado
}

const volumen = volumenCubo(3)
console.log(volumen);

//Crear una función que calcule el volumen de una pirámide
// Esta función se llama volumenPiramide
function volumenPiramide (lado, altura){
    const resultado2 = (((lado ** 2) * altura) / 3)
    return resultado2
}

const resultadoAreaPiramide = volumenPiramide(2, 5)
console.log(resultadoAreaPiramide)


// Código a una arrow function
// Esta función se llama volumenPiramideArrow
const volumenPiramideArrow = (lado, altura) => {
    const resultado2 = (((lado ** 2) * altura) / 3)
    return resultado2
}
const resultadoAreaPiramideArrow = volumenPiramideArrow(2, 5)
console.log(resultadoAreaPiramideArrow);


//Funciones anonimas
// anonima -> no tiene nombre
// no la puedo declarar, porque, no tiene nombre

// función anonima
// function(){
//     console.log('hola');
// }

// función anonima con arrow function
// () => {} 

// Nunca la podre llamar
() => {
    console.log('hehe');
}

const nombre = () => {
    console.log('hehe');
}

nombre()


const root = document.getElementById('root')

// Forma 1
// root.innerHTML = `
// <div class="box">
//             <h4>Hola mundo</h4>
//             <p class="text">Descripción</p>
//             <button type="button">haz click</button>
//         </div> 
// `

// Forma 2
//Crear button
const button = document.createElement('button')
// <button></button>
button.textContent = 'haz click'
// <button> haz click </button>
button.setAttribute('type', 'button')
// <button type="button"> haz click </button>

//Crear texto
//createElement crea elementos de HTML
const parrafo = document.createElement('p')
//<p></p>
parrafo.setAttribute('class', 'text size size size size')
//<p class="text"></p>
parrafo.textContent = 'Descripción'
//<p class="text">Descripción</p>

//h4
const h4 = document.createElement('h4')
//<h4></h4>
h4.textContent = 'Hola mundo'
//<h4>Hola Mundo</h4>

//BOX
const div = document.createElement('div')
// <div></div>
div.setAttribute('class', 'box')
// <div class="box"></div>

div.appendChild(parrafo)
div.appendChild(h4)
div.appendChild(button)
root.appendChild(div)
