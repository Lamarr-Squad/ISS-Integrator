"use strict";
// var issData = url('https://api.wheretheiss.at/v1/satellites/25544');

mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});