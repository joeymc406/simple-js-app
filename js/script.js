let pokemonRepository= (function() {
// Adding of IIFE in the form of the pokemonRepository above and at the end of the array
//creating pokemon array
    let pokemonList = [
        {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass', 'poison']
        },
         {
        name: 'Squirtle',
        height: 0.5,
        type: ['water'],
         },
         {
         name: 'Charmander',
        height: 0.6,
        type: ['fire', 'flying']
        }
    ];
    return {
        add: function(pokemon){
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        }
     }
 })();
//added console.log at end of additon of pokemonRepository IIFE
 console.log(pokemonRepository.getAll());
 pokemonRepository.add({ name: 'Pikachu'});
 console.log(pokemonReposityr.getAll());
//print size and name of pokemon to the page.

//switching of for funtion for the forEach function

pokemonList.forEach(function(name) {
    document.write('Name' + name + 'Height' + height + 'Type' + type);
});
console.log('Name' + name + 'Height' + height + 'Type' + type)

// for( let i = 0; i < pokemonList.length; i++){
//     output = `{$pokemonList[i].name} (height: ${pokemonList[1].height})`;

    //add comment for if then statement for size.

    // if(pokemonList[1].height > 0.6){
    //     output = `${output} - wow, that's big!`;
    // }
    //add output for conditional statement.

    // document.write(`${output}<br>`)
};



