document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.getElementById('toggle-menu');
    const cards = document.querySelectorAll('.cards');

    toggleMenu.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });
});
