// Addition of pokemon.repository IIFE
let pokemonRepository = (function() {
// array removed replaced with apiUrl
    let pokemonList = []
    let apiUrl = "https;//pokeapi.co/api/v2/pokemon/?limit=150"
// defining the getAll function and the add pokemon function.

    function getAll() {
        return pokemonList;
    }
    //add pokemon function
    function add(pokemon) {
        if (typeof pokemon === 'object' && isPokemonValid(pokemon)) {
            pokemonList.push(pokemon)
      }
    }
    //validation function for object keys
    function isPokemonValid(pokemon) {
        let expectedKeys = ['name', 'height', 'type']
  
    let isValid = true
         Object.keys(pokemon).forEach((key)=> {
            if (!expectedKeys.includes(key)) {
                isValid = false
                }
            })
        return isValid
    }
  
    //function moved from bottom of page to above return statements
  
    function addListItem(pokemon) {
      // addded buttons, even listener, and <ul> items
        let pokemonList = document.querySelector('.pokemon-list')
            let listItem = document.createElement('li')
                let button = document.createElement('button')
      //functions created for pokemon list & button
                    button.innerText = pokemon.name
                        button.classList.add('pokemon-list-item')
      //button created
                            listItem.appendChild(button)
                                pokemonList.appendChild(listItem)
      //button appended.
                                    button.addEventListener('click', function () {
                                        showDetails(pokemon)
        })  
    }   
// load list functions added.
    function loadList() {
        return fetch(apiUrl).then(function (response){
            return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                        console.log(pokemon);
                });
        }).catch(function (e) {
            console.error(e);
        })
    }
//load details functions added
    function loadDetails(item) {
        let url = item.detailsUrl;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            }).catch(function (e) {
                console.error(e);
            });
    }
//show detaisl(item)function
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function
            () {
                console.log(item);
            });
        }
//returns all items from functions
    return  {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadDetails: loadDetails,
      showDetails: showDetails
    }
  })()


// replaced pokemon.list and replaced with pokemon.repository for the iife
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function(pokemon) { 
        pokemonRepository.addListItem(pokemon);
    });
});




// Addition of pokemon.repository IIFE.
