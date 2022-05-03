// Addition of pokemon.repository IIFE
let pokemonRepository = (function() {
// array removed replaced with apiUrl
    let pokemonList = []
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"
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
  
    function addListItem(pokemon) {
      // added buttons, even listener, and <ul> items
        let pokemonList = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        //functions created for pokemon list & button
            button.innerText = pokemon.name
            button.classList.add('pokemon-list-item')
         //button created
            button.addEventListener('click', function () {
            showDetails(pokemon)
        //button appended.
            listItem.appendChild(button)
            pokemonList.appendChild(listItem)
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
//show details(item)function
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
      showDetails: showDetails,
      loadList: loadList
    };
})();

// IIFE created for modal javascript
let modal = (function () {
    let modalContainer = document.querySelector('#modal-container');
    // modals added to IIFE.

        function showModal(title, text) {
            //clear all existing modal content
            modalContainer.innerHTML = ' ';
    
        let modal = document.createElement('div');
            modal.classList.add('modal');
    
            //add the new modal content
        let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'close';
            closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
            titleElement.innerText = title;
    
        let contentElement = document.createElement('p');
            contentElement.innerText = text;
    
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');
        }

        // dialog promise reject variable used and called later in the return promise function
        // return promise reject function shortened by using this variable. by calling it later in the promise return
        // allows modal to always show rejected when closed any way it is closed

        let dialogPromiseReject;// can be set later, bu showDialog???
        //hide modal function
        function hideModal() {
            modalContainer.classList.remove('is-visible');

        if (dialogPromiseReject) {
            dialogPromiseReject();
            dialogPromiseReject = null;
            }
        }

        // dialog modal
        function showDialog(title, text) {
            showModal(title, text);

            //modalContainer defined here
        let modalContainer = document.querySelector('#modal-container');

            //addition of confirmation/cancel button to modal
        let Modal = modalContainer.querySelector('.modal');

        let confirmButton = document.createElement('button');
            confirmButton.classList.add('modal-confirm');
            confirmButton.innerText = 'Confirm';
        
        let cancelButton = document.createElement('button');
            cancelButton.classList.add('modal-cancel');
            cancelButton.innerText = 'Cancel';

            modal.appendChild(confirmButton);
;           modal.appendChild(cancelButton);

            // focus of the confurm button so user can simply press enter
            confirmButton.focus();
        }

        document.querySelector('show-modal').addEventListener('click', () => {
            showModal('Modal Title', 'This is the modal content');
        });

        document.querySelector('#show-dialog').addEventListener('click', () => {
            showDialog('Confirm action', 'Are you sure you want to do this').then(function() {
                alert('confirmed!');
            }, () => {
                alert('not confirmed');
            });
        });

          // escape key scenario
        window.addEventListener('keydown', (e) => {
            let modalContainer = document.querySelector('#modal-container');
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

        //promise return function of resolve and reject for dialog modal
        return new Promise((resolve, reject) => {
            cancelButton.addEventListener('click', hideModal);
            confirmButton.addEventListener('click', () => {
                dialogPromiseReject = null; // reset this????
                hideModal();
                resolve();
            });
            dialogPromiseReject = reject;
        });   
})();


// replaced pokemon.list and replaced with pokemon.repository for the iife
pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function(pokemon) { 
pokemonRepository.addListItem(pokemon);
    });
});




// Addition of pokemon.repository IIFE.
