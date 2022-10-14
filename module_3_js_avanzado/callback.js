// sincrono -> va de tarea en tarea
// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');
// console.log('5');

//asincrona -> que NO VAYA una detras de otra, que pueda activar algo 
// que esta esperando el resultado de algo y en función de eso se active

const isRunning = (edad) => {
    if(edad < 16){
        console.log('no entra')
    }else{
        console.log('entra')
    }
}

const jeje = () => {
    console.log('hola mundo')
} 

const procesoDeEntrada = (functionIsRunning) => {
    functionIsRunning(28)
}

procesoDeEntrada(jeje)