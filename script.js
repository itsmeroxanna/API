let map;
async function initMap() {
  try {
    const {Map} = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: {lat: 45.5455, lng: 11.550000},
      zoom: 8,
      mapTypeId: "terrain",
    });

    const marker = new google.maps.Marker({
      position: {lat: 45.5455, lng: 11.550000},
      map: map,
      label: "A",
      title: "Province of Vicenza",
      draggable: false,
      animation: google.maps.Animation.DROP,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<p>Current Location</p>",
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  } 
    catch (error) {
    console.error('Error loading Google Maps:', error);
    }
}