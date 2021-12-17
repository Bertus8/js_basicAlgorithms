/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

/*5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/
const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  /*const ul$$ = document.createElement("ul");
  
  const runSearch = () => {
    const search = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(selectedInput$$.value.toLowerCase())
    );
    for (const result of search) {
      ul$$.innerHTML = `<li>${result}</li>`;
    }
  };
  
const selectedInput$$ = document.querySelector('[data-function="toFilterStreamers"]');
  
selectedInput$$.addEventListener("input",runSearch);
  
document.body.appendChild(ul$$);*/
const handleChange = (event) => {
  console.log(event);
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
  );

  console.log(filteredStreamers);
};

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');

input$$.addEventListener("input", handleChange);