/**
 * Created by emilioalvarado on 4/10/17.
 */
var gradeAverage = (70 + 80 + 95) / 3;
if (gradeAverage > 80) {
    console.log('You\'re awesome')
} else {
    console.log('You need more practice.')
}






var ryan = 250
var cameron = 180
var george = 320
if (ryan > 200) {
    console.log('Ryan paid '+
    ryan, ' dollars, he bought more than 200 dollars worth of product. Ryan\'s final payment is ' + ryan * .35
)
} else {
    console.log('Ryan did not buy enough product. Ryan\'s final payment is ' + ryan)
}

if (cameron > 200) {
    console.log('Cameron paid '+
        cameron, ' dollars, he bought more than 200 dollars worth of product. Cameron\'s final payment is ' + cameron * .35)
} else {
    console.log('Cameron did not buy enough product. Cameron\'s final payment is ' + cameron)
}

if (george > 200) {
    console.log('George paid '+
        george, ' dollars, he bought more than 200 dollars worth of product. George\'s final payment is ' + george * .35)
} else {
    console.log('George did not buy enough product. George\'s final payment is ' + george)
}


var flipACoin = Math.floor(Math.random() * 2);
console.log('flipACoin = ' + flipACoin)
if (flipACoin == 0) {
    console.log('buy car');
} else {
    console.log('buy house');
}

var buyHouseOrCar = (flipACoin) ? 'buy a house' : 'buy a car';
console.log(buyHouseOrCar)