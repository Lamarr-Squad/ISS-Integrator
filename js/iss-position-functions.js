"use strict";
// mapboxgl.accessToken = mapBoxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
//     zoom: 1,
//     center: [-77.0353, 38.8895],
//     boxZoom: true,
// });
//
// var monument = [-77.0353, 38.8895];
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v9',
//     center: monument,
//     zoom: 1
// });

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

// var popOptions = {
//     closeOnMove: true,
//     anchor: "bottom-left"
// };


// $(document).ready(function () {
//     var lat, lon;
//     var pubnub = PUBNUB({
//         subscribe_key: 'demo'
//     });

    // // initializing mapbox
    // L.mapbox.accessToken = 'pk.eyJ1IjoiYW5tb2wxNzcxIiwiYSI6ImNYZXN1N28ifQ.s-1Hjdb2UR9_6eeTPJGn3A'; //public key
    // var map = L.mapbox.map('map', 'mapbox.streets');
    // var marker = L.marker([-73, 40], {
    //     icon: L.mapbox.marker.icon({
    //         'marker-size': 'large',
    //         'marker-symbol': 'rocket',
    //         "marker-color": "#63b6e5"
    //     })
    // });

//     marker.addTo(map);
//
//     // Add a new line to the map with no points.
//     var polyline = L.polyline([]).addTo(map);
//
//     // Keep a tally of how many points we've added to the map.
//     var pointsAdded = 0;
//
//     var coordinates = document.getElementById('coordinates');
//
//     pubnub.subscribe({
//         channel: "iss-pubnub",
//         message: function (message) {
//             lat = message['latitude'];
//             lon = message['longitude'];
//
//             map.setView([lat, lon]);
//             marker.setLatLng([lat, lon], 15); //15 is the zoomlevel
//
//             polyline.addLatLng([lat, lon], pointsAdded);
//
//             coordinates.innerHTML = 'Latitude: ' + lat + '<br />Longitude: ' + lon;
//         }
//     })
//     // pubnub subscribe end
//
// });
// // document end