/**
 * Created by emilioalvarado on 4/10/17.
 */
"use strict";
var luckyNumber = Math.floor(Math.random() * 6);

console.log(luckyNumber);

var receipt = 60;

switch (luckyNumber) {
    case 0:
        console.log(receipt);
        break;
    case 1:
        console.log(receipt - (receipt * .10));
        break;
    case 2:
        console.log(receipt - (receipt * .25));
        break;
    case 3:
        console.log(receipt - (receipt * .50));
        break;
    case 4:
        console.log(receipt - (receipt * .75));
        break;
    case 5:
        console.log(receipt * 0,' its free');
    default:
        console.log('Nothing happened.')
}