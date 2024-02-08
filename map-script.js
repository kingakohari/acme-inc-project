//Google Maps API call

const mapElement = document.getElementById("map");

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
    
  const { Marker } = await google.maps.importLibrary("marker");

  const location = { lat: 66.54028947695342, lng: 25.843774799713106 };

  const map = new Map(mapElement, {
    center: location,
    zoom: 15,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new Marker({
    map,
    position: location,
    title: "ACME Inc.",
  });
}

initMap();

