window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var dropdown = document.querySelector('.dropdown');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'red'; 
        if (dropdown) {
            dropdown.style.backgroundColor = 'brown'; 
        }
    } else {
        navbar.style.backgroundColor = 'transparent'; 
        if (dropdown) {
            dropdown.style.backgroundColor = 'transparent'; 
        }
    }
});


function toggleMobileMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}
