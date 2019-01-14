var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

let pink = {
    backgroundColor:'#c33ae2',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Union of Ontario Indians'
}

let blue = {
    backgroundColor:'#4286f4',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Association  of Iroquois and Allied Indians'
}

let purple = {
    backgroundColor:'#e2b03b',
    borderColor: '#BEBEBE',
    borderWidth: '1.5',
    borderStyle: 'solid',
    name: 'Chippewas of Rama First Nation'
}

  var map = L.map('mapid',{
    zoomControl: false,
    zoomSnap: 0.1
  }).setView([59.88011364706956, 8.605479290708901], 15.8);

  // Baselayer | Alternative layer: matrikkel_bakgrunn
  // In the following implementation first the quicker WMTS is loaded,
  // then the slower WMS is loaded: https://www.norgeibilder.no/?x=141784&y=6655207&level=17&utm=33&projects=704&layers=&planned=0
  // Bakgrunnskart | Alternativt kartlag: matrikkel_bakgrunn
  var key ='673B1E78E90DBCB2AD3D4C3E22D94B352D42FB9C02F7ED5F3FD70AD56C53A966F1A6EFDECCD090EFFC247FD9D054D1D39A908F0B6FBF60A28D018F0853CD0DA1'
  L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart&zoom={z}&x={x}&y={y}', {
    attribution: '<a href="http://www.kartverket.no/">Kartverket</a>',
  }).addTo(map);

  // Create layer groups to allow turning on and off of layer in the map.
  let pinkLayer = L.layerGroup().addTo(map);
  let blueLayer = L.layerGroup().addTo(map);
  let orangeLayer = L.layerGroup().addTo(map);
  let houseLayer = L.layerGroup().addTo(map);

  // Store the layer groups in an object for use in the layer control
  var urbanLayers = {
    'Orange': orangeLayer,
    'Blue': blueLayer,
    'Pink': pinkLayer,
    'Houses':houseLayer
  };

  // load polygon geoJSON data from assests/js/Boundaries.js
  function onEachFeature(feature, layer) {
    if(feature.properties.Type === 'Pink'){
         pinkLayer.addLayer(layer).addTo(map);
    } else if (feature.properties.Type === 'Blue'){
         blueLayer.addLayer(layer).addTo(map);
    } else if (feature.properties.Type === 'Orange'){
         orangeLayer.addLayer(layer).addTo(map);
    }
    layer.bindPopup(feature.properties.Type);
  }

  L.geoJSON(area, {
    style: function(feature) {
      switch (feature.properties.Type) {
           case 'Pink': return {color: '#c33ae2',"weight": 1,"opacity": 0.65};
            case 'Blue':   return {color: '#4286f4',"weight": 1,"opacity": 0.65};
            case 'Orange':   return {color: '#e2b03b',"weight": 1,"opacity": 0.65};
      }
    },
    onEachFeature: onEachFeature,
  }).addTo(map);

  // load house points geoJSON data from assests/js/Houses.js
  L.geoJSON(points, {
  pointToLayer: function (points, latlng) {
    let houses = L.circleMarker(latlng, geojsonMarkerOptions);
    houseLayer.addLayer(houses).addTo(map);
    return houses

  }
  }).addTo(map);

  // Add layer controls to turn on and off layers in the map
  layerControl = L.control.layers(null,urbanLayers,{position: 'bottomleft'});
  layerControl.addTo(map);

  // Move position of zoom control
  L.control.zoom({
    position:'bottomright'
  }).addTo(map)

  // Acquire the lattitude and longitude of the center of the map. Useful for needing to recenter the map view.
  map.on('click',function() {
      var center = map.getCenter()
      console.log(center)
  });
