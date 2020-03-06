var getJSON = require('get-json')
var pubnub = require("pubnub")({
    subscribe_key: 'demo', // always required
    publish_key: 'demo'	// only required if publishing
});

function moveISS () {
    $.get('https://api.wheretheiss.at/v1/satellites/25544', function(error, response) {
        var lat = response['iss_position']['latitude'];
        var lon = response['iss_position']['longitude'];
        var alt = response['iss_position']['altitude'];
        var vel = json.velocity;
        pubnub.publish({  //publishing the updated seat numbers through PubNub, in 'iss-pubnub' channel
            channel: "iss-pubnub",
            message: {"latitude" : lat, "longitude" : lon, "altitude": alt}, //this is the message payload we are sending
            callback: function(m){console.log(m)}
        });

    });
    setTimeout(moveISS, 3000);
}

moveISS();


