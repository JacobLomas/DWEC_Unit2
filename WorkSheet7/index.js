/*  //Ejercicio 1
var opciones;
var distancia=0;
var longD, latD;
function succes(pos){
    var crd= pos.coords;
    document.write((crd.latitude+""+crd.longitude));
    sumaDistancia(crd.longitude, crd.latitude);
    document.write(distancia);
}
function sumaDistancia(long, lat){
    long=Math.abs(long);
    lat=Math.abs(lat);
    if(!longD){
        longD=long;
        latD=lat;
    }
    distancia+=111120*(Math.hypot(Math.abs((longD-long), Math.abs((latD-lat)))));
    longD=long;
    latD=lat;
}

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }
opciones = {
    timeout: 50000,
}

if(!navigator.geolocation)
    console.log("El navegador no es compatible con geolocalizacion");
else
    navigator.geolocation.watchPosition(succes, error, opciones);  */


//Ejercicio 2


function success(pos){
    var crd= pos.coords;
    var map = L.map('mapid').setView([crd.latitude, crd.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //L.marker([crd.latitude, crd.longitude]).addTo(map)
      //  .bindPopup('Estamos ahí bro.<br>')
        //.openPopup();
    
    L.marker([crd.latitude, crd.longitude], {icon:myIcon}).addTo(map).bindPopup('Estás aquí bro').openPopup();

}
var myIcon = L.icon({
    iconUrl: 'casa.png',
    iconSize: [95, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

if(!navigator.geolocation)
    console.log("El navegador no es compatible con geolocalizacion");
else
    navigator.geolocation.getCurrentPosition(success, error);


/* //Ejercicio3
function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    };

if(!navigator.geolocation)
    console.log("El navegador no es compatible con geolocalizacion");
else
    navigator.geolocation.getCurrentPosition(success, error); */