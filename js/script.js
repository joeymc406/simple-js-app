// Addition of pokemon.repository IIFE.

let pokemonRepository = (function() {

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
    //add pokemon function
    function add(pokemon) {
        pokemonList.push(pokemon);
            if (typeof pokemon === 'object' && isPokemonValid(pokemon)) {
                pokemonList.push(pokemon);
        }
    }
    //validation function for object keys
    function isPokemonValid(pokemon) {
        let expectedKeys = ['name', 'height', 'type']

        let isValid = true
            Object.keys(pokemon).forEach((key) => {
                if (!expectedKeys.includes(key)) {
                    isValid = false
                }
            }
        )}

        return isValid

    //function moved from bottom of page to above return statements
    
    function addListItem(pokemon) {
    // adding buttons to <ul> and naming buttons
    //create elements for the <ul>
           let pokemonList = document.querySelector(".pokemon-list");
               let listItem = document.createElement("li");
                   let button = document.createElement('button');
                       button.innterText = Pokemon.Name;
                           button.classList.add('pokemon.name');
                               listItem.appendChild(button);
                                   pokemonList.appendChild(listitem);
                                   
    }

   //changed return and get all fucntion to shorter version

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    }
});
//added console.log at end of additon of pokemonRepository IIFE

 console.log(pokemonRepository.getAll());

 pokemonRepository.add({ name: 'Pikachu'});

 console.log(pokemonRepository.getAll());
//print size and name of pokemon to the page.

// replaced pokemon.list and replaced with pokemon.repository for the iife

pokemonRepository.getAll.forEach(function(pokemon) {
    document.write('Name:' + pokemon.name + 'Height:' + pokemon.height + 'Type' + pokemon.type);
     //added function to call upon the add list item for the loop  
        pokemonRepository.addListItem(pokemon)
})