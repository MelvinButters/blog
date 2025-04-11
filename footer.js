// Select the element where we want to inject the footer content
const footer = document.getElementById('footer');

// Inject the HTML for the footer section (disclaimer content)
footer.innerHTML = `
    <div class="footer-content">
        <p>
            The Game Master Society uses trademarks and/or copyrights owned by Paizo Inc., 
            used under Paizo's Community Use Policy 
            (<a href="https://paizo.com/licenses/communityuse" target="_blank">paizo.com/licenses/communityuse</a>).
        </p>
        <p>
            We are expressly prohibited from charging you to use or access this content. 
            The Game Master Society is not published, endorsed, or specifically approved by Paizo. 
            For more information about Paizo Inc. and Paizo products, visit 
            <a href="https://paizo.com" target="_blank">paizo.com</a>.
        </p>
    </div>
`;
