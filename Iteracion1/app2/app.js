

/*  2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */

/*2.3 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

/* 2.4 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.


// Este API consiste en predecir tu nacionalidad segun el nombre que introduzcas

/* {
    "name": "Aqui va lo que introduzcas en el imput que en este caso es (Jorge)",
    "country": [
    {
    "country_id": "GT",
    "probability": 0.06319584805414911
    },
    {
    "country_id": "PY",
    "probability": 0.05272803068434378
    },
    {
    "country_id": "PE",
    "probability": 0.05162251402612687
    }
    ]
    }
 */

// esta es la direccion de la API  que vamos a consultar
const baseUrl = 'https://api.nationalize.io';

// Declaramos una funcion asincrona
const consultar = async () => {

// declaramos una variable y nos traemos lo que este escrito en el imput
imputText = document.querySelector('input').value;

// declaramos una constante que le asignamos el fetch
// el fetch se compone de la url API + el valor name de dicha API y
// lo que este escrito en el imput

const result = await fetch(baseUrl + '/?name=' + imputText);

// declaramos una constante don de convertimos lo que hemos alojado en
// result en .jason

const resultToJson = await result.json();

//enviamos la consulta a la API 
let {country} = resultToJson;

// Usamos un foreach de county que recorrera los elementos almacenados en county
    country.forEach(element => {

// Declaramos una constante llamada nameData que se encargara de crear
// un elemento de tipo parrafo "p".
        const nameData = document.createElement('p');

// Declaramos una constante llamada botonDelete que se encargara de crear
// un elemento de tipo butoon.
        const botonDelete = document.createElement('button'); //Boton X

// Asignamos el string "X" para mostrarlo en el boton      
        botonDelete.textContent ='X';  //Boton X

// asignamos la clase imputText al boton creado anteriormente
        botonDelete.className= `${imputText}`  //Boton X

// escuchamos el evento click y borramos el contenido del parrafo que se ha creado
// al pulsar el boton creado anteriormente "X"     
        botonDelete.addEventListener('click', () => deleteParra(nameData));  //Boton X
        

// Asignamos al contenido de nameData el valor de lo escrito en el imput mas el elemento
// del forEach que estamos iterando con la propiedad "probability" mas el elemento iterado con la propiedad county_id
  nameData.textContent = imputText + ' tiene un ' + element.probability + '% de ser de nacionalidad '+ element.country_id + ' ';
 

// actuamos sobre el body para crear un nodo con el contenido de nameData
        document.body.appendChild(nameData);

// Borramos lo que esta dentro del parrafo
        nameData.appendChild(botonDelete);

    });

}

// funcion para borrar el contenido de algo
const deleteParra = (contenido) => {

    contenido.remove()
}

