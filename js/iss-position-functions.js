"use strict";


// create the popup
var popup = new mapboxgl.Popup({ offset: 25, anchor: 'bottom-left'})
    .setHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/EEIk7gwjgIM\" " +
        "frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

