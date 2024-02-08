function loadEvent() {
  const gradientContainer = document.querySelector(".gradient-container");

  // Insert the navigation bar on every HTML page
  if (gradientContainer) {
    gradientContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <header>
            <nav class="navbar">
                <h1><a href="./index.html"><span>Acme</span> <span class="hide-on-mobile">Inc.</span></a></h1>
                <ul>
                    <li><a href="./ceginformacio.html">Céginformáció</a></li>
                    <li><a href="./szolgaltatasok.html">Szolgáltatásaink</a></li>
                    <li><a href="./kapcsolat.html">Kapcsolat</a></li>
                </ul>
            </nav>
        </header>
    `
    );

    // Add the 'active' class to the current page link in the navigation
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });

    // Insert the footer on every HTML page
    gradientContainer.insertAdjacentHTML(
      "beforeend",
      `
        <footer id="footer-btm">
            <h2>Acme</h2>
        </footer>
    `
    );
  } else {
    console.error("Gradient container not found");
  }
}

window.addEventListener("load", loadEvent);
