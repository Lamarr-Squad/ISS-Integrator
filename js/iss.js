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
getCoords();

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



mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});

