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


var monthNumber = Math.floor(Math.random() * 11);
var month = (monthNumber + 1)

console.log(month)

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('no more months')
}




