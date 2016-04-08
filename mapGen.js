
var map;
function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {center: {lat:59.479906, lng: -108.281250}, zoom: 3});
}

google.maps.event.addDomListener(window, 'load', initMap);


function initOverlay() {
var mapDiv = document.getElementById('map');
map = new google.maps.Map(mapDiv, {center: {lat:59.479906, lng: -108.281250}, zoom: 3});

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
  center: {lat: 66.290897, lng: -95.097656},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NL = new google.maps.Circle({
  center: {lat: 55.185894, lng: -60.908203},
  radius:90000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });
var NT = new google.maps.Circle({
  center: {lat: 64.687080, lng: -116.367188},
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
    sendLocation("NU", {lat: 66.290897, lng: -95.097656});
});
NL.addListener('click', function(){
    sendLocation("NL", {lat: 55.239044, lng: -61.171875});
});
NT.addListener('click', function(){
    sendLocation("NT", {lat: 64.687080, lng: -116.367188});
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
    var info;
    var food = document.getElementById("foodd").checked;
    var drink = document.getElementById("drinkk").checked;
    $.ajax({
       type: "GET",
       url: 'loadmap.php',
        async: false,
       dataType: 'json',
        data: {arguements: [province, food, drink]},
       success: function(data) {
           info = data;
       },
        error: function(data) {
            window.alert('No worky');
        }
    });
    var accessData = info.suc;
    var string = "<p>";
   for(var i = 0; i < accessData.length; i++){
        if(string.search(accessData[i]) == -1){
            string += accessData[i]+"<br>";

        }

    }
    string += "</p>";

    var infowindow = new google.maps.InfoWindow({
                    position: location,
                    content: string
                });
    infowindow.open(map);
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });

}

document.getElementById("bc").onchange=function(){
if(document.getElementById("bc").checked==true){
document.getElementById("1").innerHTML="<A HREF='bc.html'>Click link for more information on British Columbia</A>";}
else{document.getElementById("1").innerHTML="";}
}

document.getElementById("ab").onchange=function(){
if(document.getElementById("ab").checked==true){
document.getElementById("2").innerHTML="<A HREF='ab.html'>Click link for more information on Alberta</A>";}
else{document.getElementById("2").innerHTML="";}
}

document.getElementById("sk").onchange=function(){
if(document.getElementById("sk").checked==true){
document.getElementById("3").innerHTML="<A HREF='sk.html'>Click link for more information on Saskatchewan</A>";}
else{document.getElementById("3").innerHTML="";}
}

document.getElementById("mb").onchange=function(){
if(document.getElementById("mb").checked==true){
document.getElementById("4").innerHTML="<A HREF='mb.html'>Click link for more information on Manitoba</A>";}
else{document.getElementById("4").innerHTML="";}
}

document.getElementById("nb").onchange=function(){
if(document.getElementById("nb").checked==true){
document.getElementById("5").innerHTML="<A HREF='nb.html'>Click link for more information on New Brunswick</A>";}
else{document.getElementById("5").innerHTML="";}
}

document.getElementById("pe").onchange=function(){
if(document.getElementById("pe").checked==true){
document.getElementById("6").innerHTML="<A HREF='pe.html'>Click link for more information on Prince Edward Island</A>";}
else{document.getElementById("6").innerHTML="";}
}

document.getElementById("nu").onchange=function(){
if(document.getElementById("nu").checked==true){
document.getElementById("7").innerHTML="<A HREF='nu.html'>Click link for more information on Nunavut</A>";}
else{document.getElementById("7").innerHTML="";}
}

document.getElementById("nl").onchange=function(){
if(document.getElementById("nl").checked==true){
document.getElementById("8").innerHTML="<A HREF='nl.html'>Click link for more information on Newfoundland and Labrador</A>";}
else{document.getElementById("8").innerHTML="";}
}

document.getElementById("nt").onchange=function(){
if(document.getElementById("nt").checked==true){
document.getElementById("9").innerHTML="<A HREF='nt.html'>Click link for more information on Northwest Territories</A>";}
else{document.getElementById("9").innerHTML="";}
}

document.getElementById("ns").onchange=function(){
if(document.getElementById("ns").checked==true){
document.getElementById("10").innerHTML="<A HREF='ns.html'>Click link for more information on Nova Scotia</A>";}
else{document.getElementById("10").innerHTML="";}
}

document.getElementById("ont").onchange=function(){
if(document.getElementById("ont").checked==true){
document.getElementById("11").innerHTML="<A HREF='on.html'>Click link for more information on Ontario</A>";}
else{document.getElementById("11").innerHTML="";}
}

document.getElementById("qc").onchange=function(){
if(document.getElementById("qc").checked==true){
document.getElementById("12").innerHTML="<A HREF='qc.html'>Click link for more information on Quebec</A>";}
else{document.getElementById("12").innerHTML="";}
}

document.getElementById("yt").onchange=function(){
if(document.getElementById("yt").checked==true){
document.getElementById("13").innerHTML="<A HREF='yt.html'>Click link for more information on Yukon</A>";}
else{document.getElementById("13").innerHTML="";}
}

function logout(){
window.location.href = "userlogin.html";
document.getElementById("out").style.display="initial";
}

function home(){
window.location.href = "welcomePage.html";

}


function vis() {
var mapDiv = document.getElementById('map');
map = new google.maps.Map(mapDiv, {center: {lat:59.479906, lng: -108.281250}, zoom: 3});

var bc=new google.maps.Marker({
  position: {lat: 53.726668, lng: -127.647621},
  icon:'pic/bc.jpg'
  });
var ab=new google.maps.Marker({
  position: {lat: 53.933271, lng: -116.576504},
  icon:'pic/ab.png'
  });
var sk=new google.maps.Marker({
  position: {lat: 52.939916, lng: -106.450864},
  icon:'pic/sk.jpg'
  });
var mb=new google.maps.Marker({
  position: {lat: 54.395398, lng: -94.921875},
  icon:'pic/mb.png'
  });
var nb=new google.maps.Marker({
  position: {lat: 46.403321, lng: -69.257813},
  icon:'pic/nb.jpg'
  });
var pe=new google.maps.Marker({
  position: {lat: 47.065931, lng: -58.886719},
  icon:'pic/pe.png'
  });
var nu=new google.maps.Marker({
  position: {lat: 66.290897, lng: -95.097656},
  icon:'pic/nu.jpg'
  });
var nl=new google.maps.Marker({
  position: {lat: 55.239044, lng: -61.171875},
  icon:'pic/nl.png'
  });
var nt=new google.maps.Marker({
  position: {lat: 64.687080, lng: -116.367188},
  icon:'pic/nt.png'
  });
var ns=new google.maps.Marker({
  position: {lat: 42.881760, lng: -63.544922},
  icon:'pic/ns.jpg'
  });
var on=new google.maps.Marker({
  position: {lat: 51.253775, lng: -85.323214},
  icon:'pic/on.jpg'
  });
var qc=new google.maps.Marker({
  position: {lat: 52.939916, lng: -73.549136},
  icon:'pic/qc.jpg'
  });
var yt=new google.maps.Marker({
  position: {lat: 64.282327, lng: -135.000000},
  icon:'pic/yt.gif'
  });



bc.setMap(map);
ab.setMap(map);
sk.setMap(map);
mb.setMap(map);
nb.setMap(map);
pe.setMap(map);
nu.setMap(map);
nl.setMap(map);
nt.setMap(map);
ns.setMap(map);
on.setMap(map);
qc.setMap(map);
yt.setMap(map);
}






