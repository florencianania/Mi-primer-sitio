const botonMenu = document.getElementById('mobile-menu');
const listaEnlaces = document.getElementById('nav-list');

botonMenu.addEventListener('click', () => {
    listaEnlaces.classList.toggle('show');
});