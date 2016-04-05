/* global google */

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
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var AB = new google.maps.Circle({
  center: {lat: 53.933271, lng: -116.576504},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var SK = new google.maps.Circle({
  center: {lat: 52.939916, lng: -106.450864},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var MB = new google.maps.Circle({
  center: {lat: 53.760861, lng: -98.813876},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NB = new google.maps.Circle({
  center: {lat: 46.565316, lng: -66.461916},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var PE = new google.maps.Circle({
  center: {lat: 46.510712, lng: -63.416814},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NU = new google.maps.Circle({
  center: {lat: 70.299771, lng: -83.107577},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NL = new google.maps.Circle({
  center: {lat: 53.135509, lng: -57.660436},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NT = new google.maps.Circle({
  center: {lat: 64.825544, lng: -124.845733},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NS = new google.maps.Circle({
  center: {lat: 44.681987, lng: -63.744311},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var ON = new google.maps.Circle({
  center: {lat: 51.253775, lng: -85.323214},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var QC = new google.maps.Circle({
  center: {lat: 52.939916, lng: -73.549136},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var YT = new google.maps.Circle({
  center: {lat: 64.282327, lng: -135.000000},
  radius:90000,
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

BC.addListener('click', function(){
    sendLocation("BC", {lat: 53.726668, lng: -127.647621});
});
AB.addListener('click', function(){
    sendLocation("AB", {lat: 53.933271, lng: -116.576504});
});
SK.addListener('click', function(){
    sendLocation("SK", {lat: 52.939916, lng: -106.450864});
});
MB.addListener('click', function(){
    sendLocation("MB", {lat: 53.760861, lng: -98.813876});
});
NB.addListener('click', function(){
    sendLocation("NB", {lat: 46.565316, lng: -66.461916});
    });
PE.addListener('click', function(){
    sendLocation("PE", {lat: 46.510712, lng: -63.416814});
});
NU.addListener('click', function(){
    sendLocation("NU", {lat: 70.299771, lng: -83.107577});
});
NL.addListener('click', function(){
    sendLocation("NL", {lat: 64.825544, lng: -124.845733});
});
NT.addListener('click', function(){
    sendLocation("NT", {lat: 64.825544, lng: -124.845733});
});

NS.addListener('click', function(){
    sendLocation("NS", {lat: 44.681987, lng: -63.744311});
});
ON.addListener('click', function(){
    sendLocation("ON", {lat: 51.253775, lng: -85.323214});
});
QC.addListener('click', function(){
    sendLocation("QC", {lat: 52.939916, lng: -73.549136});
});
YT.addListener('click', function(){
    sendLocation("YT", {lat: 64.282327, lng: -135.000000});
});

}

function sendLocation(province, location){
    var food = document.getElementById("food").checked;
    var drink = document.getElementById("drink").checked;
    $.ajax({
       type: "GET",
       url: 'loadmap.php',
        async: false,
       dataType: 'json',
        data: {arguments:[province, food, drink]},
       success: function(data) {
           if (!(data.error)) {
               info = JSON.stringify(data.results);
               console.log("success");
           }
           else {
               window.alert(data.error);
               console.log("error");
           }
       }
    });
   var accessData = JSON.parse(info);
    var string = "<p>";
    for(var i = 0; i < accessData.length; i++){
        if(!(string.contains(accessData[i].item))){
            string += accessData[i].item+"<br>";

        }
        if(!(string.contains(accessData[i].name))){
            string += accessData[i].name+"<br>";
        }
        
    }
    string += "</p>";

    var infowindow = new google.maps.InfoWindow({
                    position: location,
                    content: string
                });
    infowindow.open(map,province);

}

function bc(){
var bc = document.getElementById("bc").checked;
if (bc==true){
document.getElementById("link").innerHTML="heyyyy";}
}








