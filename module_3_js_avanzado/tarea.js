//Ejercico Nº1

// Porque el callback es la función que se envia como 
// parametro a la otra función en este caso receiverCallback
const impresionMensaje = () => {
    console.log('cualquier mensaje');
}

// reciboFunction es generico
const receiverCallback = (reciboFunction) => {
    reciboFunction()
}

// receiverCallback(impresionMensaje)

//Tarea Nº4
// 120 / 120 = 1
// 80 <= 120 = 0.6 -> menor a dos horas
// 200 / 120 = mayo a 1, entonces esto mayor a dos horas
// 100 / 120 = menor a 1, entonces es menor a dos horas
const total_minutos = [120, 80, 200, 100]
const dos_horas = 120
const minutos_mayor_dos_horas = []

const callbackArray = (minuto) => {
    if(minuto < dos_horas){
        console.log(minuto, 'no cumple')
    } else {
        minutos_mayor_dos_horas.push(minuto)
    }
}

const receiverMinute = (functionName) => {
    total_minutos.forEach((minuto)=>{
        functionName(minuto)
    })
}
//ReceiverMinuto recibe una función como parametro, por ende
// callbackArray es un callback
receiverMinute(callbackArray)
console.log(minutos_mayor_dos_horas);
