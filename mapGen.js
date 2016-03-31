var map;


function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {center: {lat:63.141651, lng: -113.378906}, zoom: 3});
}

google.maps.event.addDomListener(window, 'load', initMap);





