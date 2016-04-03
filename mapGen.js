var map;
function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {center: {lat:63.141651, lng: -113.378906}, zoom: 3});
}

google.maps.event.addDomListener(window, 'load', initMap);


function initOverlay() {
var mapDiv = document.getElementById('map');
map = new google.maps.Map(mapDiv, {center: {lat:63.141651, lng: -113.378906}, zoom: 3});

var BC = new google.maps.Circle({
  center: {lat: 53.726668, lng: -127.647621},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var AB = new google.maps.Circle({
  center: {lat: 53.933271, lng: -116.576504},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var SK = new google.maps.Circle({
  center: {lat: 52.939916, lng: -106.450864},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var MB = new google.maps.Circle({
  center: {lat: 53.760861, lng: -98.813876},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NB = new google.maps.Circle({
  center: {lat: 46.565316, lng: -66.461916},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var PE = new google.maps.Circle({
  center: {lat: 46.510712, lng: -63.416814},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NU = new google.maps.Circle({
  center: {lat: 70.299771, lng: -83.107577},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NL = new google.maps.Circle({
  center: {lat: 53.135509, lng: -57.660436},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NT = new google.maps.Circle({
  center: {lat: 64.825544, lng: -124.845733},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NS = new google.maps.Circle({
  center: {lat: 44.681987, lng: -63.744311},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var ON = new google.maps.Circle({
  center: {lat: 51.253775, lng: -85.323214},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var QC = new google.maps.Circle({
  center: {lat: 52.939916, lng: -73.549136},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var YT = new google.maps.Circle({
  center: {lat: 64.282327, lng: -135.000000},
  radius:50000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });

BC.setMap(map);
AB.setMap(map);
SK.setMap(map);
MB.setMap(map);
NB.setMap(map);
PE.setMap(map);
NU.setMap(map);
NL.setMap(map);
NT.setMap(map);
NS.setMap(map);
ON.setMap(map);
QC.setMap(map);
YT.setMap(map);

BC.addListener('click', sendLocation("BC", BC.center));
AB.addListener('click', sendLocation("AB", AB.center));
SK.addListener('click', sendLocation("SK", SK.center));
MB.addListener('click', sendLocation("MB", MB.center));
NB.addListener('click', sendLocation("NB", NB.center));
PE.addListener('click', sendLocation("PE", PE.center));
NU.addListener('click', sendLocation("NU", NU.center));
NL.addListener('click', sendLocation("NL", NL.center));
NT.addListener('click', sendLocation("NT", NT.center));
NS.addListener('click', sendLocation("NS", NS.center));
ON.addListener('click', sendLocation("ON", ON.center));
QC.addListener('click', sendLocation("QC", QC.center));
YT.addListener('click', sendLocation("YT", YT.center));
}

function sendLocation(location, center){
    var prov = location;
    var centr = center;
    var food = document.getElementbyID("food").isChecked();
    var drink = document.getElementbyID("drink").isChecked();
    window.location.href = "loadmap.php?province=" + prov;
    window.location.href = "loadmap.php?useFood=" + food;
    window.location.href = "loadmap.php?useDrink=" + drink;
    window.location.href = "loadmap.php?loc=" + centr;
    window.location = "loadmap.php";
}

function createPopup(string, center){
    infowindow = new google.maps.InfoWindow({
                    position: center,
                    content: string
                });
    infowindow.open(map);
}







