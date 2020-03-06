$(document).ready(function () {

    // MapBox Access
    L.mapbox.accessToken = 'pk.eyJ1IjoiYW5tb2wxNzcxIiwiYSI6ImNYZXN1N28ifQ.s-1Hjdb2UR9_6eeTPJGn3A'; //public key
    var map = L.mapbox.map('map', 'mapbox.streets');

    var marker = L.marker([-73, 40], {
        icon: L.mapbox.marker.icon({
            'marker-size': 'large',
            'marker-symbol': 'rocket',
            "marker-color": "#63b6e5"
        })
    }).addTo(map);
    marker.addTo(map);

    //JSON api to get velocity and altitude
    var issData = 'https://api.wheretheiss.at/v1/satellites/25544';
    //Establish empty lat/lng for pubnub JS use
    var lat, lon;
    var pubnub = PUBNUB({subscribe_key: 'demo'});
    // Add a new line to the map with no points.
    var polyline = L.polyline([]).addTo(map);
    // Keep a tally of how many points we've added to the map.
    var pointsAdded = 0;
    // Populate HTML element with our coordinates
    var coordinates = document.getElementById('coordinates');

    pubnub.subscribe({
        channel: "iss-pubnub",
        message: function (message) {
            lat = message['latitude'];
            lon = message['longitude'];

            map.setView([lat, lon]);
            marker.setLatLng([lat, lon], 15); //15 is the zoomlevel

            polyline.addLatLng([lat, lon], pointsAdded);

            coordinates.innerHTML = '<b>Latitude:</b> ' + lat + '<br /><b>Longitude:</b> ' + lon + '<br /><b>Velocity:</b> ' + vel + ' km/h' + '<br /><b>Altitude:</b> ' + alt + ' km' +
                '<br /> <button id="liveButton" type="button" data-toggle="modal" data-target="#myModal">Live View</button>';
        }
    });

    //Get velocity and altitude function
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
                    var alt = json.altitude;
                    var vel = json.velocity;
                    window.alt = alt.toFixed(4);
                    window.vel = vel.toFixed(4);
                }
            );
        setTimeout(getCoords, 5000);
    }
    getCoords();

    //Generate facts for top banner
    function randomFact() {
        var funFacts =
            [
                "The ISS is the largest manned object ever put into space!",
                "16 nations were involved in the construction of the ISS!",
                "The ISS travels at speeds upwards of 5 miles-per-second!",
                "The ISS is the single most expensive built in the history of mankind, estimated at over $120 billion dollars!",
                "Space is Silent! Since there is no atmosphere in space, sound waves have no way of travelling!",
                "The first astronauts' footsteps on the moon will probably still be there 100 years from now!",
                "A little under 6 percent of our entire solar system's mass belongs to the sun!",
                "If 2 pieces of the same metal touch each other in space, they will bond together - a process known as 'cold welding'!",
                "ISS is an acronym for International Space Station!",
                "The first African-American woman in space was Dr. Mae Jemison in September of 1992!",
                "The first piloted mission in space was Apollo 7 in 1968!"
            ];
        var x = funFacts.length;
        var i = Math.floor((Math.random() * x) + 1);
        return funFacts[i];
    }
    //Timer for facts
    setTimeout(function () {
        $('#theFacts').empty().append(randomFact());
        console.log("ok go");
    }, 5000);
});

//Code for mapbox popup - too much distortion as it follows marker
// // create the popup
// var popup = new mapboxgl.Popup({ offset: 25, anchor: 'bottom-left'})
//     .setHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/EEIk7gwjgIM\" " +
//         "frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
//
// // create DOM element for the marker
// var el = document.createElement('div');
// el.id = 'marker';
//
// // create the marker
// new mapboxgl.Marker(el)
//     .setLngLat(monument)
//     .setPopup(popup) // sets a popup on this marker
//     .addTo(map);
//