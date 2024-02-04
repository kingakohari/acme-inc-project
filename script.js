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

  //Google Maps API call
  let map;

  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const location = { lat: 66.54028947695342, lng: 25.843774799713106 }; 

    map = new Map(document.getElementById("map"), {
      center: location, 
      zoom: 15,
      mapId: 'DEMO_MAP_ID'
    });

    const marker = new AdvancedMarkerElement({
      map,
      position: location,
      title: "ACME Inc.",
    });
  }

  initMap();
}

window.addEventListener("load", loadEvent);
