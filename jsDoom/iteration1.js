/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/


const showButton = document.body.querySelector(".showme");
console.log(showButton);
const showH1 = document.body.querySelector("#pillado");
console.log(showH1);
const showAllP = document.body.querySelectorAll('p');
console.log(showAllP);
const showElementsPokemon = document.body.querySelectorAll(".pokemon");
console.log(showElementsPokemon);
const showTestMe = document.body.querySelectorAll("[data-function='testMe']");
console.log(showTestMe);
const showCharacter = document.body.querySelector("[data-function='testMe']")[2];
console.log(showCharacter);
