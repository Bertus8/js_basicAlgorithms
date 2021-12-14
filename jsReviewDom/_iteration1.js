
const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
for (let index = 0; index < countries.length; index++) {
    const div$$ = document.createElement('div');
    const country = countries[index];
    div$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;
    const btn$$= document.createElement('button');
    btn$$.innerHTML = 'Elimina este elemento';
    div$$.appendChild(btn$$);
    
    btn$$.addEventListener('click',() =>{
        div$$.remove();
    })
    
    document.body.appendChild(div$$);
}

/*const button$$ = document.createElement("button");
button$$.innerHTML = "Elimina el contenido";
document.body.appendChild(button$$);*/

button$$.addEventListener('click' , () => {
   const allDivs$$ = document.body.querySelectorAll("div");
   allDivs$$[allDivs$$.length - 1].remove(); 
});

