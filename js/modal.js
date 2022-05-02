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