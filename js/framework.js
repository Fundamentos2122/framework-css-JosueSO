const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const modal_class = "modal";
const show_class = "show";

document.addEventListener("DOMContentLoaded", function() {
    //Botones que abren un modal
    let modal_open_buttons = document.querySelectorAll(`[${attr_toggle}='${modal_class}']`);
    
    modal_open_buttons.forEach(element => {
        element.addEventListener("click", OpenModal);
    });
    
    //Botones que cierran un modal
    let modal_close_buttons = document.querySelectorAll(`[${attr_dismiss}]`);
        
    modal_close_buttons.forEach(element => {
        element.addEventListener("click", CloseModal);
    });
});

/**
 * Muestra un modal
 * @param {PointerEvent} e 
 */
function OpenModal(e) {
    //Leer el elemento que se va a mostrar
    let modal_selector = e.target.getAttribute(attr_target);

    //Obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //Agregar la clase para mostrar el modal
    modal.classList.add(show_class);
}

/**
 * Cierra un modal
 * @param {PointerEvent} e 
 */
 function CloseModal(e) {
    //Leer el elemento que se va a ocultar
    let modal_selector = e.target.getAttribute(attr_dismiss);

    //Obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //Agregar la clase para mostrar el modal
    modal.classList.remove(show_class);
}