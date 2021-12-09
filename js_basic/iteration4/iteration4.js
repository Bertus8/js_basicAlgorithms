const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

avengers.shift();
avengers.push("IRONMAN");
console.log(avengers);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0],rickAndMortyCharacters[4]);

rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.shift();
rickAndMortyCharacters.shift();
rickAndMortyCharacters.push("Rick");

console.log(rickAndMortyCharacters);