// const fetchPokemon=()=>{
//     console.log('Fetching pokemon')
//     for(let i=1;i<=400;i++){
//         const url=`https://pokeapi.co/api/v2/pokemon/${i}`
//         fetch(url).then((response)=>{
//             return response.json()
//         }).then((data)=>{
//             // console.log(data)
//             // const pokemon={};
//             // pokemon.name=data.name;
//             // pokemon.id=data.id;
//             // pokemon.image=data.sprites.front_default;
//             // // pokemon.types=[]
//             // //     for(let i=0;i<data.types.length;i++)
//             // //         pokemon.types.push(data.types[i].type.name)
//             // // pokemon.types.join(', ')
//             // pokemon.type=data.types.map(ele =>
//             //     // console.log(ele.type.name)
//             //     ele.type.name
//             // ).join(', ')
//             const pokemon={
//                 name:data.name,
//                 id:data.id,
//                 image:data.sprites.front_default,
//                 type:data.types.map(ele =>
//                     ele.type.name
//                     ).join(', ')
//          }
//             console.log(pokemon)
            
//         });
//     }
// }
// fetchPokemon();


const fetchPokemon=()=>{
    const promises=[]
    for(let i=1;i<=108;i++){
        const url=`https://pokeapi.co/api/v2/pokemon/${i}`
        promises.push(
            fetch(url).then(response=>response.json())
        )
    }
    Promise.all(promises).then((results)=>{
        //since we are implicitly returning an object in arrow functions surround it by parenthesis
        // console.log(typeof(results))
        // console.log(results)
        const pokemon=results.map((data)=>({
            name:data.name,
            id:data.id,
            image:data.sprites.front_default,
            type:data.types.map(ele=>ele.type.name).join(', ')
        }))
        console.log(typeof(pokemon))
        console.log(pokemon)
    })
}
fetchPokemon();



// const fetchPokemon=()=>{
//     const url=`https://pokeapi.co/api/v2/pokemon/1`
    
//     fetch(url).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//         // console.log(typeof(data.types))
//     })
// }
// fetchPokemon();

  