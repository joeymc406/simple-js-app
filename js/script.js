// Addition of pokemon.repository IIFE
let pokemonRepository = (function () {
    // array removed replaced with apiUrl
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

   // let modalContainer = document.querySelector('#modal-container') code comented out not sure what to do with it yet!!

    // defining the getAll function and the add pokemon function.

    function getAll() {
        return pokemonList
    }
    //add pokemon function
    function add(pokemon) {
        if (typeof pokemon === 'object' && isPokemonValidListItem(pokemon)) {
            pokemonList.push(pokemon)
      }
    }
  
    function showLoadingMessage() {
    let loadingMessage = document.querySelector('.loading-PokemonList')
        loadingMessage.classList.remove('hidden')
    }
  
    function hideLoadingMessage() {
    let loadingMessage = document.querySelector('.loading-PokemonList')
        loadingMessage.classList.add('hidden')
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
      // added buttons, even listener, and <ul> items
    let pokemonList = document.querySelector('.pokemon-list')
    let listItem = document.createElement('li')
    // adding bootstrap below this line...
    listItem.classList.add('')// add more here
    let button = document.createElement('button')
      //functions created for pokemon list & button
        button.innerText = pokemon.name
        button.classList.add('pokemon-list-item')
      //button created
        listItem.appendChild(button)
        pokemonList.appendChild(listItem)
      //button appended.
         button.addEventListener('click', function (event) {
        showDetails(pokemon)
        })
        //BOOTSTRAP... add classes/attributes

    }
  
    //show details(item)function
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {

        //showModal(pokemon) this part of code commented out dont know what to do with it yet!!!!!
      })
    }
  
    // load list functions added.
    function loadList() {
        showLoadingMessage()
  
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
        setTimeout(function () {
        hideLoadingMessage()
            }, 1000)
        })
    })
        .catch(function (e) {
        console.error(e)
        hideLoadingMessage()
        })
    }
    //load details functions added
    function loadDetails(item) {
        showLoadingMessage()
  
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
            hideLoadingMessage()
        })
            .catch(function (e) {
            console.error(e)
            hideLoadingMessage()
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
})() // error flagged at line 217 character 3 in console on chrome
  
  // replaced pokemon.list and replaced with pokemon.repository for the iife
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon)
        })
    })
  