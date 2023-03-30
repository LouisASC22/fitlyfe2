// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 40.0379, lng: -76.3055 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
const marker = new google.maps.Marker({
    position:{ lat: 40.0379, lng: -76.3055 },
    map: map,
  });
}
placeMarker({ lat: 40.0379, lng: -76.3055 });

  function placeMarker(coords){
     const map = new google.maps.Map(document.getElementById("map"));
      const marker = new google.maps.Marker({
    position:{ lat: 40.0379, lng: -76.3055 },
    map: map,
  });
  } 

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;

