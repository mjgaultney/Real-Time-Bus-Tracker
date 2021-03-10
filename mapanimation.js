//below is my public access token for mapbox.
mapboxgl.accessToken = 'pk.eyJ1IjoibWpnYXVsdG5leSIsImEiOiJja2x6Z2gzMzEwdmZkMnVwazRnNzhvMjJ2In0.XNmLqfRKocjB-aPqsqgHLw';

//This is the overall map coordinates and custom blueprint styling.
    let map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mjgaultney/ckm2eiddu4wko17qkl93ekigp',
        center: [-96.808891, 32.779167],
        zoom: 11
    });

    //This is the starting bus stop marker for our journey
    let marker = new mapboxgl.Marker({
      color: 'red'})
.setLngLat([-96.806165, 32.811588])
.addTo(map);

//This is the Array which includes the bus stops between my house and my parents house 
var busStop = [
  [-96.809290, 32.808396],
  [-96.814080, 32.804496],
  [-96.812747, 32.802716],
  [-96.810729, 32.800891],
  [-96.797277, 32.781626],
  [-96.812874, 32.802959],
  [-96.811074, 32.806808],
  [-96.808686, 32.808845],
  [-96.807829, 32.809965],
  [-96.805693, 32.811731],
  ];

//ideally this counter would run through the bus stops between our houses. 
let counter = 0;

function move(){
  setTimeout(() => {
    if (counter >= busStop.length) return;
    marker.setLngLat(busStop[counter]);
    counter++;
    move();
  }, 1000);
}
