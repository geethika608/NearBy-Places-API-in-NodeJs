var browser_key = "Your Browser Key Goes Here";
var request = require('request');
var latlang = {
    "latitude":17.4301946,
    "longitude":78.3977677
};

var options = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        qs: {
            location: latlang.latitude + ',' + latlang.longitude,
            radius: '20000',
            types: 'stadium',
            sensor: 'true',
            key: browser_key
        }
};

request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(JSON.parse(body));
    
});

