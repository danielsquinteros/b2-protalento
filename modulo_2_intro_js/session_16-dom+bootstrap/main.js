// Eliminar padre pero encontrandolo desde un hijo
// const uno = document.getElementById('uno')
// const padre = uno.parentElement
// padre.removeChild(uno)


// CLICK
const button = document.querySelector('.btn.btn-primary')

// addEventListener -> Recibe dos argumentos
// Primer argumento -> es el tipo de evento
// Segundo argumento -> es la función
button.addEventListener('click', (event) => {
    // e.target me trae el ELEMENTO que disparo el evento
    // el elemento que disparo el evento el boton crear
    event.target.textContent = 'Haz hecho click';
    console.log('hiciste click');
})

// Mouse
// mousemove -> si el mouse se mueve dentro del boton
button.addEventListener('mousemove', (e) => {
    e.target.className = 'btn btn-danger'
})

// mouseout -> si el mouse sale del boton
button.addEventListener('mouseout', (e) => {
    e.target.className = 'btn btn-primary'
})

// setTimeout
// Recibe dos argumentos
// Primer argumento -> es una funcion que se activa una vez pasado el tiempo
// Segundo argumento -> el tiempo en milisegundos
setTimeout(function(){
    console.log('pasaron los 3 segundooos');
}, 3000)


//eventos del teclado
const name = document.getElementById('name')
// name.addEventListener('keydown', (e) => {
//     if(e.key === "1"){
//         alert('ingresaste el numero 1, no es parte de un nombre')
//     }
//     console.log('teclado presionado :', e.key);
// })

//evento change
// cada vez que el input cambie su valor, este se activa
// pero si mi input esta en focus no se active
const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', () => {
    console.log('cambio de valor el checkbox');
}) 

const description = document.getElementById('description')
description.addEventListener('change', () => {
    setTimeout(function(){
        console.log('pasaron los 3 segundooos despues de hacer change');
    }, 3000)
    console.log('cambio de valor el description');
})

//Forma 1 - innerHTML
const cards_container = document.getElementById('col-container-cards')

const createCardInnerHTML = (name, description, imageUrl) => {
    const date = new Date();
    let html = `<div class="card mb-3">
    <img src="${imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text"><small class="text-muted">${date}</small></p>
      <button class="btn btn-danger" type="button">Eliminar</button>
    </div>
  </div>`
  cards_container.innerHTML += html
}


// Forma 2 - Nodos y elementos
const createCardsNodes = (name, description, imageUrl) => {
    const date = new Date();

    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card mb-3')

    const image = document.createElement('img')
    image.setAttribute('src', imageUrl)
    image.setAttribute('class', 'card-img-top')
    image.setAttribute('alt', 'descripcion imagen')

    const divBody = document.createElement('div')
    divBody.setAttribute('class', 'card-body')

    const h5 = document.createElement('h5')
    h5.className = 'card-title'
    h5.textContent = name

    const pDescription = document.createElement('p')
    pDescription.className = "card-text"
    pDescription.textContent = description

    const pDate = document.createElement('p')
    pDate.className = "card-text"
    pDate.innerHTML = `<small class="text-muted">${date}</small>`

    const button = document.createElement('button')
    button.setAttribute('class', 'btn btn-danger')
    button.setAttribute('type', 'button')
    button.textContent = 'Eliminar'

    // borro los elementos
    button.addEventListener('click', () => {
        cards_container.removeChild(divCard)
    })
    
    divBody.appendChild(h5)
    divBody.appendChild(pDescription)
    divBody.appendChild(pDate)
    divBody.appendChild(button)

    divCard.appendChild(image)
    divCard.appendChild(divBody)

    cards_container.appendChild(divCard)
}


// Submit
// submit se ocupa un formulario
// el fomulario por defecto se activa y refresca la pagina
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault() // elimino el comportamiento por defecto
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let image = document.getElementById('image').value
    createCardsNodes(name, description, image)
})
console.log(form);

// const name1 = "daniel"
// const name2 = "felipe"
// const totalNombres = name1 + " " + name2
// const totalEcma6 = `${name1} ${name2}`
// console.log(totalNombres);
// console.log(totalEcma6);