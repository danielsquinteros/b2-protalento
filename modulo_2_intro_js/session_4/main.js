// Condicionales
// if(false){
//     console.log('dev.f entre al bloque 1')
// } else {
//     console.log('entre al bloque 2')
// }

// Not A Number
var cadenaTexto = 'devf'
cadenaTextoANumero = parseInt(cadenaTexto);
console.log(cadenaTextoANumero);

// FALSY
// undefined, null, 0, NaN, ""
if(undefined){
    console.log('CASO FALSY - BLOQUE 1 - TRUE')
} else {
    console.log('CASO FALSY - BLOQUE 2 - FALSE')
}

// TRUTHY
// {}, [], 42, "0", "false"
if("cualquier_cosa_que_tenga_un_caracter_dentro_de_un_string"){
    console.log('CASO TRUTHY - BLOQUE 1 - TRUE')
} else {
    console.log('CASO TRUTHY - BLOQUE 2 - FALSE')
}

// ELSE IF
var semaforo = prompt('Ingresa un color de semaforo')
var semaforoLowerCase = semaforo.toLowerCase();
// === extrictamente igual, verifico el valor y el tipo de dato
if(semaforoLowerCase === 'rojo'){
    document.write("<img src='https://www.clarin.com/img/2021/03/09/0x5gB2KxU_1200x630__1.jpg'>")
} else if (semaforoLowerCase === 'amarillo'){
    document.write("<img src='https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/website/uploaded/img-10-1611649539.jpg'>")
} else if (semaforoLowerCase === 'verde'){
    document.write("<img src='https://memegenerator.net/img/images/15210022.jpg'>")
} else {
    console.log('No ingresas nada valido')
}
