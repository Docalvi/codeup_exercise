(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

//     // TODO: Convert planetsString to an array, save it to planetsArray.
//     console.log(planetsString);
    console.log(planetsArray);
//
//     // TODO: Create a string with <br> tags between each planet. console.log() your results.
//     //       Why might this be useful?
    var planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);
//     // Bonus: Create a second string that would display your planets in an unordered list.
//     //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
//     //        console.log() your results.
//

    var listPlanet = '<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>';

    console.log(listPlanet)
    document.write(listPlanet)


})();


