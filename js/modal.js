// IIFE created for modal javascript
let pokemonRepository = (function () {
    let modalContainer = document.querySelector('#modal-container');
    // modals added to IIFE.

        function showModal(title, text) {
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
            titleElement.innerText = title;
    
        let contentElement = document.createElement('p');
            contentElement.innerText = text;
    
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');
        }
        //hide modal function
        function hideModal() {
            modalContainer.classList.remove('is-visible');
        }

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
    
        document.querySelector('show-modal').addEventListener('click', () => {
            showModal('Modal Title', 'This is the modal content');
        });
    })();