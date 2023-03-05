const fetchPokemon=()=>{
    const promises=[]
    for(let i=1;i<=400;i++){
        const url=`https://pokeapi.co/api/v2/pokemon/${i}`
        promises.push(
            fetch(url).then(response=>response.json())
        )
    }
    Promise.all(promises).then((results)=>{
        //since we are implicitly returning an object in arrow functions surround it by parenthesis
        const pokemon=results.map((data)=>({
            name:data.name,
            id:data.id,
            image:data.sprites.front_default,
            type:data.types.map(ele=>ele.type.name).join(', ')
        }))
        displayPokemon(pokemon)
    })
}

const displayPokemon=(pokemon)=>{
    console.log(pokemon)
    let pokemonStringElement=pokemon.map((pokeman)=>

        `<li class="card">
            <img class="image" src="${pokeman.image}"/>
            <h6 class="title">${pokeman.id}. ${pokeman.name}</h6>
            <p class="type">Type: ${pokeman.type}</p>
        </li>`
    ).join('');
    pokedex.innerHTML=pokemonStringElement;
}
fetchPokemon();
