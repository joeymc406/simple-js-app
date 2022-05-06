// Addition of pokemon.repository IIFE
let pokemonRepository = (function() {
// array removed replaced with apiUrl
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');
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

    function showLoadingMessage() {
        let loadingMessage =  document.querySelector('.loading-PokemonList')
        loadingMessage.classList.remove('hidden')
    }

    function hideLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-pokemonList')
        loadingMessage.classList.add('hidden')
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
  
    function addListItem(pokemon) {
      // added buttons, even listener, and <ul> items
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        //functions created for pokemon list & button
            button.innerText = pokemon.name;
            button.classList.add('pokemon-list-item');
         //button created
           
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
            //button appended.

            button.addEventListener('click', function (event) {
                showDetails(pokemon);
        })  
    }   

    //show details(item)function
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
                showModal(pokemon);
            });
        }   
// load list functions added.
    function loadList() {
        showLoadingMessage();

        return fetch(apiUrl).then(function (response) {
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
            hideLoadingMessage();
        });
    }
//load details functions added
    function loadDetails(item) {
        showLoadingMessage();

    let url = item.detailsUrl;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.weight = details.weight;
                item.types = details.types;
                hideLoadingMessage();
            }).catch(function (e) {
                console.error(e);
                hideLoadingMessage();
            });
        }

        document.querySelector('#show-modal').addEventListener('click', () => {
        showModal('modal Title', 'Modal Content');
        });

      // escape key scenario
        window.addEventListener('keydown', (e) => {
        // escape key executes hide modal function
        if (e.key == 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

        modalContainer.addEventListener('click', (e) =>
        {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

    function showModal(pokemon) {
            //clear all existing modal content
            modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
            modal.classList.add('modal');
    
            //add the new modal content
    let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'close';
            closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
            titleElement.innerText = pokemon.name; 

    let heightElement = document.createElement('p');
    heightElement.innerText = 'height:' + pokemon.height;

    let weightElement = document.createElement('p');
        typeElement.innerText = 'Types: ';
        pokemon.types.forEach((type, numberOfTypes) => {
        numberOfTypes = pokemon.types.pokemon;
        
        if (numberOfTypes ===1) {
            typeElement.innerText += type.type.name;
        } else {
            typeElement.innerText += type.type.name + " ";
        }
    })
    
    let imageElement = document.createElement('img');
    imageElement.classList.add(modal-image);
    imageElement.src = pokemon.imageUrl
    // modals added to IIFE.

    
            modal.appendChild(closeButtonElement);
            modal.appendChild(imageElement);
            modal.appendChild(titleElement);
            modal.appendChild(heightElement)
            modal.appendChild(weightElement);
            modal.appendChild(typeElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal);

            // adds .is-visible to modal container
            modalContainer.classList.add('is-visible');
        }

        //hide modal function
        function hideModal() {
            modalContainer.classList.remove('is-visible');

        // dialog modal
        function showDialog(title, text) {
            showModal(title, text);
        }
    }

//returns all items from functions
return  {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadDetails: loadDetails,
    showDetails: showDetails,
    loadList: loadList
  };
});


// replaced pokemon.list and replaced with pokemon.repository for the iife
pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function(pokemon) { 
pokemonRepository.addListItem(pokemon);
    });
});