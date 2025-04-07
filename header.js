// Select the element where we want to inject the header content
const header = document.getElementById('header');

// Inject the HTML for the header section (title, description, and optional logo/image)
header.innerHTML = `
    <div class="top-section">
        <!-- Main Blog Title -->
        <h1>Welcome to My Blog</h1>

        <!-- Optional Image (e.g., logo) -->
        <img src="path/to/your/image.png" alt="Logo" class="logo">

        <!-- Blog Description -->
        <div class="blog-description">
            <p>Welcome to my blog, where I share my thoughts on various topics, from tech to travel.</p>
        </div>
    </div>
`;
