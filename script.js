function loadEvent() {
    
    // Insert the navigation bar on every HTML page
    document.body.insertAdjacentHTML("afterbegin", `
        <header>
            <nav id="navbar">
                <h1>Acme Inc.</h1>
                <ul>
                    <li><a href="./szolgaltatasok.html">Szolgáltatásaink</a></li>
                    <li><a href="./ceginformacio.html">Céginformáció</a></li>
                    <li><a href="./kapcsolat.html">Kapcsolat</a></li>
                </ul>
            </nav>
        </header>
    `);

    // Add the 'active' class to the current page link in the navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Insert the footer on every HTML page
    document.body.insertAdjacentHTML("beforeend", `
        <footer id="footer">
            <h2>Acme</h2>
        </footer>
    `);
}

window.addEventListener("load", loadEvent);