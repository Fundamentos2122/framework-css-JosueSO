const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const modal_class = "modal";
const dropdown_class = "dropdown";
const dropdown_menu_class = "dropdown-menu";
const dropdown_toggle = "dropdown-toggle";
const navbar_toggle = "navbar-toggle";
const menu_collapse_class = "navbar-collapse";
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

    //Dropdown del submenú
    let dropdown_buttons = document.querySelectorAll(`.${dropdown_class} > .${dropdown_toggle}`);
        
    dropdown_buttons.forEach(element => {
        element.addEventListener("click", ToggleDropdown);
    });

    //Collapse del menú
    let collapse_menu_buttons = document.querySelectorAll(`.${navbar_toggle}`);
        
    collapse_menu_buttons.forEach(element => {
        element.addEventListener("click", ToggleMenu);
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

/**
 * Abre y cierra el submenú
 * @param {PointerEvent} e 
 */
function ToggleDropdown(e) {
    e.preventDefault();

    let menu = e.target.parentNode.querySelector(`.${dropdown_menu_class}`);
    
    if (menu.classList.contains(show_class)) {
        menu.classList.remove(show_class);
    }
    else {
        menu.classList.add(show_class);
    }
}

/**
 * Abre y cierra el menú
 * @param {PointerEvent} e 
 */
 function ToggleMenu(e) {
    let menu = e.target.parentNode;
    
    console.log(menu);
    if (menu.classList.contains(navbar_toggle)) {
        menu = menu.parentNode;
    }

    console.log(menu);

    menu = menu.querySelector(`.${menu_collapse_class}`);

    console.log(menu);

    if (menu.classList.contains(show_class)) {
        menu.classList.remove(show_class);
    }
    else {
        menu.classList.add(show_class);
    }
}