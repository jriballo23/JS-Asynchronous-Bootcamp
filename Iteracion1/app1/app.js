/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.
 */

// Esta es la direccion de la API
const url = 'https://api.agify.io?name=michael';


// Esta funcion inicia la funcion init cuando se abre el navegador
window.onload = () => {
    init();
}

// Esta es una funcion asincrona que recoge y muesta 
// los datos de la funcion getData

const init = async () => {
    const data = await getData();
    console.log(data);
}

// Esta funcion copia los datos que se encuentran en la API
// luego los transforma a .jason y devuelve el reswultado de esa transformacion

const getData = async () => {

    const result = await fetch(`${url}`);

    const dataJason= await result.json();

    return dataJason
}



