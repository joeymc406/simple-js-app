// Addition of pokemon.repository IIFE
let pokemonRepository = (function () {
    // array removed replaced with apiUrl
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
    let input = $('input');
        input.on('input', filterList);
    // defining the getAll function and the add pokemon function
    function getAll() {
        return pokemonList
    }
    
    //add pokemon function
    function add(pokemon) {
        if (typeof pokemon === 'object' && isPokemonValidListItem(pokemon)) {
            pokemonList.push(pokemon)
      }
    }
  
    function isPokemonValidListItem(pokemon) {
    let expectedKeys = ['name', 'detailsUrl']
  
      let isValid = true
        Object.keys(pokemon).forEach((key) => {
        if (!expectedKeys.includes(key)) {
            isValid = false
            }
        })
        return isValid
    }
    //validation function for object keys
    function isPokemonValid(pokemon) {
    let expectedKeys = ['name', 'height', 'type']
  
    let isValid = true
        Object.keys(pokemon).forEach((key) => {
        if (!expectedKeys.includes(key)) {
            isValid = false
            }
        })
        return isValid
    }
  
    function addListItem(pokemon) {
        console.log('addListItem')
      // vanilla javascript removed bootstrap added.
    let ul = document.querySelector('ul');

    let listItem = document.createElement('li');

    // adding bootstrap below this line... ----------------------------
        listItem.classList.add('col-sm-8') 
    
        //button added
    let button = document.createElement('button');

        button.innerText = pokemon.name

        //button attributes added
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
            event.target.blur();

        button.classList.add('btn', 'btn-block', 'btn-outline-primary')
        button.classList.add('m-1', 'bg-blue');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '.modal')
      //button appended.
        })

        listItem.appendChild(button)
        ul.appendChild(listItem)
        //BOOTSTRAP... add classes/attributes
    }
  
    //show details(item)function
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
      });
    }

    function showModal(pokemon) {

    let modalBody = $('.modal-body');
    let modalTitle = $('modal-title');
      
        modalTitle.empty();
        modalBody.empty();

    let pokemonName = $('<h1>${pokemon.name</h1>');
    let pokemonImage = $('<img class="modal-img mx-auto" src"${add link here}" alt="pokemon Logo" ${pokemon.name}">')
    let pokemonHeight = $('<p class="ml-4 mt-2 mb-0">Height: ${pokemon.height</p>')
    let pokemonWeight = $('<p class="ml-4 mb-0">Weight: ${pokemon.weight}</p>');
    let pokemonTypes = $('<p class="ml-4">types: ${pokemon.types.join(', ')}</p>');

    
    // Append all pokemon elements.
        modalTitle.append(pokemonName);
        modalBody.append(pokemonImage);
        modalBody.append(pokemonHeight);
        modalBody.append(pokemonWeight);
        modalBody.append(pokemonTypes);
}
    // load list functions added.
    function loadList() {
  
        return fetch(apiUrl)
            .then(function (response) {
        return response.json()
        })
            .then(function (json) {
            console.log(json.results)
            json.results.forEach(function (item) {
    let pokemon = {
        name: item.name,
        detailsUrl: item.url
        }
        add(pokemon)
            // console.log(pokemon)
        })
    })
        .catch(function (e) {
        console.error(e)
        })
    }

    function filterList() {

    let inputValue = $('input').val();
    let list = $('li');
        list.each(function() {

    let item = $(this);
    let name = item.text();
    if (name.startsWith(inputValue)) {
        item.show();
    } else {
        item.hide();
            }
        });
    }
    //load details functions added
    function loadDetails(item) {
  
    let url = item.detailsUrl
        return fetch(url)
            .then(function (response) {
        return response.json()
        })
            .then(function (details) {
            item.imageUrl = details.sprites.front_default
            item.height = details.height
            item.weight = details.weight
            item.types = details.types
        })
            .catch(function (e) {
            console.error(e)
        })
    }
  
    //returns all items from functions
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadDetails: loadDetails,
        showDetails: showDetails,
        loadList: loadList
    }
})()
  
  // replaced pokemon.list and replaced with pokemon.repository for the iife
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon)
        })
    })
  