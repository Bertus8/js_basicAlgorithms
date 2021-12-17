/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18

5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adult = ages.filter((age)=>age > 18);
const numP = ages.filter((age)=> age%2===0);

console.log(adult,numP);
/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.

5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lol= streamers.filter((streamer)=>streamer.gameMorePlayed=== "Legue of Legends");
console.log(lol);

const streamersU = streamers.filter((streamer) => streamer.name.toLowerCase().includes("u"));
console.log(streamersU);

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const filteredLol = streamers.filter((streamer)=>{
    let returned = streamer.gameMorePlayed.toLowerCase().includes('legends');
    if(streamer.age > 35){
        return (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase());
    }
    return returned;
});
console.log(filteredLol);

