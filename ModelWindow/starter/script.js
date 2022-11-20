'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const onClick = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const onClose = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnShowModal.forEach(element => {
    element.addEventListener('click', onClick);
});

btnCloseModal.addEventListener('click', onClose);
overlay.addEventListener('click', onClose);

//adding key event ---> its an a global event so adding to document object
document.addEventListener('keydown', (evnt) => {
    if (evnt.key === 'Escape' && !overlay.classList.contains('hidden')) {
        onClose();
    }
});