const buttonMainMenu = document.querySelector('.button_main_menu');
const panelMainMenu = document.getElementById('main_menu');


buttonMainMenu.onclick = function() {
    let displayPosition;
    document.getElementById('main_menu').style.display == 'none' ? displayPosition = 'block' : displayPosition = 'none'
    document.getElementById('main_menu').style.display = displayPosition
}
