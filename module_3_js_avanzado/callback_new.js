// Callback
// Una función que es pasada como argumento a otra funcion

// Saludar es la función callback porque esta pasando como argumento a la función mensaje
function saludar(){
    console.log('hola desde un callback');
}

// Mensaje tiene un parametro
function mensaje(parametro_1){
    console.log(parametro_1);
    parametro_1()
}

mensaje(saludar)