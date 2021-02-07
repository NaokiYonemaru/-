'use strict';

{
    const opens = document.getElementsByClassName('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    for (let open of opens) {
        open.addEventListener('click', () => {
            modal.classList.remove('hidden');
            mask.classList.remove('hidden');
        });
    }    
    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
    mask.addEventListener('click', () => {
        close.click();
    });
}


