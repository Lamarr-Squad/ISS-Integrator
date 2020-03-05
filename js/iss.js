"use strict";
// var issData = url('https://api.wheretheiss.at/v1/satellites/25544');
var issData = 'https://api.wheretheiss.at/v1/satellites/25544';

function getCoords() {
    fetch(issData)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('no connection');
            }
        })
        .then((json) => {

            var lat = json.latitude;
            var lng = json.longitude;
            var alt = json.altitude;
            var vel = json.velocity;


            document.getElementById('lat').innerHTML = "Latitude: " + lat.toFixed(6);
            document.getElementById('lng').innerHTML = "Longitude: " + lng.toFixed(6);
            document.getElementById('altitude').innerHTML = "Altitude: " + alt.toFixed(6);
            document.getElementById('velocity').innerHTML = "Velocity: " + vel.toFixed(6);

            }
        );
    setTimeout(getCoords, 5000);
}

var funFacts = [
    {
        Subject: "ISS",
        Fact1: "The ISS is the largest manned object ever put into space!",
        Fact2: "16 nations were involved in the construction of the ISS!",
        Fact3: "The ISS travels at speeds upwards of 5 miles-per-second!",
        Fact4: "The ISS is the single most expensive built in the history of mankind, estimated at over $120 billion dollars!"
    },
    {
        Subject: "Space",
        Fact1: "Space is Silent! Since there is no atmosphere in space, sound waves have no way of travelling!",
        Fact2: "The first astronauts' footsteps on the moon will probably still be there 100 years from now!",
        Fact3: "A little under 6 percent of our entire solar system's mass belongs to the sun!",
        Fact4: "If 2 pieces of the same metal touch each other in space, they will bond together - a process known as 'cold welding'!",
    },
    {
        Subject: "NASA",
        Fact1: "ISS is an acronym for International Space Station!",
        Fact2: "The first African-American woman in space was Dr. Mae Jemison in September of 1992!",
        Fact3: "The first piloted mission in space was Apollo 7 in 1968!",
    }
];



// mapboxgl.accessToken = mapBoxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9'
// });
//
//         // Assign to variable
//         var jqXhr = $.ajax(issData);
//
// // Attach callback functions individually
//
//
// function replayPos (){
//         jqXhr.done(function (data, status, jqXhr) {
//             var lat = data.latitude;
//             var lng = data.longitude;
//             var geojay =
//                 {
//                     "type": "Feature",
//                     "geometry": {
//                         "type": "Point",
//                         "coordinates": [lng, lat]
//                     },
//                     "properties": {
//                         "name": ""
//                     }
//                 };
//             return geojay;
//
//             })
//
// } ;
//
//
//             map.on('load', function () {
//                 window.setInterval(function () {
//                     map.getSource('drone').setData(url);
//                     console.log("ping");
//                 }, 2000);
//             })
//             map.addSource('drone', {type: 'geojson', data: url });
//         map.addLayer({
//             'id': 'drone',
//             'type': 'symbol',
//             'source': 'drone',
//             'layout': {'icon-image': 'rocket-15'}
//         })



mapboxgl.accessToken = 'pk.eyJ1IjoicHVybmVsbGJwIiwiYSI6ImNrNnV4d2dtbDBleHAzZnBudW14Z2VweGsifQ.TcGUbeIR8s-vagfNSK7x4w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 2
});

var radius = 20;

function pointOnCircle() {

    fetch(issData)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('no connection');
            }
        })
        .then((json) => {

                var lat = json.latitude;
                var lng = json.longitude;
                var alt = json.altitude;
                var vel = json.velocity;


                document.getElementById('lat').innerHTML = "Latitude: " + lat.toFixed(6);
                document.getElementById('lng').innerHTML = "Longitude: " + lng.toFixed(6);
                document.getElementById('altitude').innerHTML = "Altitude: " + alt.toFixed(6);
                document.getElementById('velocity').innerHTML = "Velocity: " + vel.toFixed(6);


            return {
                'type': 'Point',
                'coordinates': [lng, lat]
            };


            }




        );
    setTimeout(getCoords, 5000);

}

map.on('load', function() {
// Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('point', {
        'type': 'geojson',
        'data': pointOnCircle()
    });

    map.addLayer({
        'id': 'point',
        'source': 'point',
        'type': 'circle',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#007cbf'
        }
    });

    function animateMarker(timestamp) {
// Update the data to a new position based on the animation timestamp. The
// divisor in the expression `timestamp / 1000` controls the animation speed.
        map.getSource('point').setData(pointOnCircle());

// Request the next frame of the animation.
        requestAnimationFrame(animateMarker);
    }

// Start the animation.
    animateMarker(0);
});

