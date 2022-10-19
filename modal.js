function Modal(id){
    let modal = document.querySelector(`#${id}`);
    let open_modal = document.querySelector(`[data-modal-target="${id}"]`);
    let close_modal = modal.querySelector(`[data-modal-close="true"]`); 

    open_modal.addEventListener("click", Open );
    close_modal.addEventListener("click", Close );

    function Open ()  { modal.classList.add('modal-show'); }
    function Close () { modal.classList.remove('modal-show'); }

    return { Open, Close };
}

Modal('modal-1').Open();
Modal('modal-2');