// Changer les styles de la barre de navigation lors du défilement
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Ouvrir une question dans les FAQ
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Changer l'icône
        const icon = faq.querySelector('.faq_icon i'); // Correction du sélecteur

        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'; // Correction de l'affectation
        } else {
            icon.className = 'uil uil-plus'; // Correction de l'affectation
        }
    });
});

// Gérer les boutons pour le menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
// ouvrir le menu
menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
//close menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);