"use strict";
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    zoom: 1,
    center: [-77.0353, 38.8895],
    boxZoom: true,
});

var monument = [-77.0353, 38.8895];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: monument,
    zoom: 1
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 25, anchor: 'bottom-left'})
    .setHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/EEIk7gwjgIM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// var popOptions = {
//     closeOnMove: true,
//     anchor: "bottom-left"
// };