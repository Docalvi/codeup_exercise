/**
 * Created by emilioalvarado on 4/27/17.
 */
$(document).ready(function () {


    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "3d40118cc10a26c5e20ae5c985670c7b",
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
    });









});



