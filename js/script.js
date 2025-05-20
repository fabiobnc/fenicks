// Menu hamburguer mobile
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('nav ul');

    if (toggle && navList) {
        toggle.addEventListener('click', function () {
            navList.classList.toggle('show');
        });
    }
});

// Fecha menu ao clicar em qualquer item
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('nav ul');

    if (toggle && navList) {
        toggle.addEventListener('click', function () {
            navList.classList.toggle('show');
        });

        // Fecha o menu ao clicar em qualquer item
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navList.classList.remove('show');
            });
        });
    }
});
