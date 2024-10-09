const btnMenuMobile = document.querySelector(".btn-mobile");
const imgMenuMobile = document.querySelector(".btn-mobile img");
const menuMobile = document.querySelector(".menu-mobile");

function closeMenu() {
    menuMobile.style.display = 'none';
    imgMenuMobile.setAttribute("src", "./assets/img/menu/icon-menu.png");
    imgMenuMobile.style.width = "3.7rem";
    imgMenuMobile.style.height = 'auto';
    document.body.style.overflow = "";
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMenu() {
    menuMobile.style.display = 'block';
    imgMenuMobile.setAttribute("src", "./assets/img/menu/menu-close.png");
    imgMenuMobile.style.width = "2.2rem";
    imgMenuMobile.style.height = 'auto';

    document.body.style.overflow = "hidden";
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

btnMenuMobile.addEventListener("click", () => {
    colorTitulo("#ffffff");
    headerColor('#00856F');
    if (menuMobile.style.display == "block") {
        closeMenu();
    } else {
        openMenu();
    }

});

let linksMenuMobile = document.querySelectorAll(".nav-mobile ul li a");
linksMenuMobile.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    })
})

function colorTitulo(cor) {
    const titulo = document.querySelector("header h2");
    const tituloSpan = document.querySelector("header h2 span");
    titulo.style.color = cor;
    tituloSpan.style.color = cor;
}

function headerColor(cor){
    const headerColor = document.querySelector('header');
    headerColor.style.backgroundColor = cor; // Nova cor
}

function colorLinksMenu(cor){
    const linksMenuDeskstop = document.querySelectorAll(".nav-desktop ul li a");
    linksMenuDeskstop.forEach(link => link.style.color = cor);
}

function btnAgendar(cor){
    const nome = document.querySelector(".btn-agendar-desktop");
    nome.style.color = cor;
    nome.style.borderColor = cor;
}

window.addEventListener('scroll', function () {
    if (window.scrollY == 0) {
        headerColor('#00856F');
        colorLinksMenu('#DCE9E2');
        colorTitulo("#ffffff");
        btnAgendar("#ffffff")
    } else if (window.scrollY > 50) { // você pode ajustar o valor para onde a cor deve mudar
        headerColor('#00856F');
        colorLinksMenu('#DCE9E2');
        colorTitulo("#ffffff");
        btnAgendar("#ffffff")
    } else {
        headerColor('#00856F');
        colorLinksMenu('#DCE9E2');
        colorTitulo("#ffffff");
        btnAgendar("#ffffff");
    }
});
