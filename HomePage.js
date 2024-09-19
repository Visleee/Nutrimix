const return2 = document.querySelector('.return');
const subMenu = document.getElementById("subMenu");

return2.addEventListener('click', () => {
    window.location.href = 'LoginPage.html';
});

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}