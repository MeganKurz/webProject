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

BC.addListener('onclick', sendLocation("BC", {lat: 53.726668, lng: -127.647621}));
AB.addListener('onclick', sendLocation("AB", {lat: 53.933271, lng: -116.576504}));
SK.addListener('onclick', sendLocation("SK", {lat: 52.939916, lng: -106.450864}));
MB.addListener('onclick', sendLocation("MB", {lat: 53.760861, lng: -98.813876}));
NB.addListener('onclick', sendLocation("NB", {lat: 46.565316, lng: -66.461916}));
PE.addListener('onclick', sendLocation("PE", {lat: 46.510712, lng: -63.416814}));
NU.addListener('onclick', sendLocation("NU", {lat: 70.299771, lng: -83.107577}));
NL.addListener('onclick', sendLocation("NL", {lat: 64.825544, lng: -124.845733}));
NT.addListener('onclick', sendLocation("NT", {lat: 64.825544, lng: -124.845733}));
NS.addListener('onclick', sendLocation("NS", {lat: 44.681987, lng: -63.744311}));
ON.addListener('onclick', sendLocation("ON", {lat: 51.253775, lng: -85.323214}));
QC.addListener('onclick', sendLocation("QC", {lat: 52.939916, lng: -73.549136}));
YT.addListener('onclick', sendLocation("YT", {lat: 64.282327, lng: -135.000000}));

}

function sendLocation(province, location){
    var results;
    var food = document.getElementById("food").checked;
    var drink = document.getElementById("drink").checked;
    $.ajax({
       type: 'GET',
       url: 'loadmap.php',
       dataType: 'json',
       data: {functionname: 'getData', arguments:[province, food, drink]},
       success: function(feedback){
           if(!('error' in feedback)){
               results = feedback.result;
           }
           else{
               window.alert(feedback.error);
           }
       }
    });
    var accessData = JSON.parse(results);
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








