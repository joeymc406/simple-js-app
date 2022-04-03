// Addition of pokemon.repository IIFE.

let pokemonRepository= (function() {

// pokemon array with pokemon and properties.
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
// defining the getAll function and the add pokemon function.

    function getAll() {
        return pokemonList;
    }
    
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    
    // rueturn add and get all function

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
 console.log(pokemonRepository.getAll());
//print size and name of pokemon to the page.

//replaced for function with forEach function.

// replaced pokemon.list and replaced with pokemon.repository for the iife

pokemonRepository.getAll.forEach(function(pokemon) {
    document.write('Name:' + pokemon.name + 'Height:' + pokemon.height + 'Type' + pokemon.type);
});