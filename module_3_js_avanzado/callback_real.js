const alumnos = {
    id_1: {
        name: "Saul",
        pais: "Colombia"
    },
    id_2: {
        name: "Felipe",
        pais: "Chile"
    },
    id_3: {
        name: "Patricia",
        pais: "Colombia"
    }
}
// COMO CONVERTIR UN OBJETO A UN ARREGLO
// console.log('HOLAAA---->', alumnos['id_2']);

// const alumnosArray = [
//     {
//         id: 'id_1',
//         name: "Saul",
//         pais: "Colombia"
//     },
//     {
//         id: 'id_2',
//         name: "Felipe",
//         pais: "Chile"
//     },
//     {
//         id: 'id_3',
//         name: "Patricia",
//         pais: "Colombia"
//     }
// ]
// // Rendimiento más lento
// const alumnoEncontrado = alumnosArray.find((alumni) => alumni.name === 'Felipe')
// console.log('---->', alumnoEncontrado);

//Convención de desarroladores
// el primer argumento del callback es el ERROR
// el segundo argumento del callback es el resultado
const functionCallback = (error, alumno) => {
    if(error){
        console.warn(error);
    } else {
        console.log('Alumno encontrado', alumno);
    }
}

const buscarAlumno = (id, callback) => {
    let alumnoEncontrado
    // esto viene de una base de datos
    setTimeout(()=> {
        alumnoEncontrado = alumnos[id]
        //Truthy
        if(alumnoEncontrado){
            // Si lo encuentra significa que no existe el error por eso el error es null
            // Y le envio como segundo argumento al alumno encontrado
            callback(null, alumnoEncontrado)
        } else {
            // Si no lo encontro envio un mensaje con el erro
            // y el segundo parametro es null porque no hay ningun alumno encontrado
            callback(`No existe el alumno con el id: ${id}`, null)
        }
    }, 1000)
}

buscarAlumno('id_1', functionCallback)