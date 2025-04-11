// Select the element where we want to inject the header content
const header = document.getElementById('header');

// Inject the HTML for the header section (title, description, and optional logo/image)
header.innerHTML = `
    <div class="top-section">
        <!-- Main Blog Title -->
        <h1>The Game Master Society</h1>

        <!-- Optional Image (e.g., logo) -->
        <img src="starfinder.png" alt="Logo" class="logo">

        <!-- Blog Description -->
        <div class="blog-description">
            <p>A discussion of Pathfinder and Starfinder - TTRPG's by Paizo.</p>
        </div>
    </div>
`;
