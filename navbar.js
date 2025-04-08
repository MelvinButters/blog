const navbar = document.getElementById('navbar');

navbar.innerHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="archive.html">Archive</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <div class="hamburger" id="hamburger-menu">
        &#9776; <!-- Hamburger icon -->
    </div>
`;

// Adding mobile hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggles the visibility of the nav on mobile
});
