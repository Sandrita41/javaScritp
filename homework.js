//1. Surasti skaičių nuo 1 iki 100 sumą, kurie dalinasi iš 3 be liekanos

const { boolean } = require("yargs");

var i = 1;
var sum = 0;
while (i <= 100) {
    // Jeigu skaičius dalinasi iš 3 be liekanos
    if (i % 3 === 0) {
        console.log(i);
        //sumuojame
        sum = sum + i;
    }
    //padidiname skaičius vienetu
    i = i + 1;
}
console.log("Final sum" + sum)

/*	2. Atspausdinti visus pirminius (dalinasi iš savęs arba iš 1) intervale 
skaičius intervale nuo 2 iki 100 */

var m = 1;
var s = 0;
while (s <= 100) {
    m = m + 1;
    s = (2 * m) - 1;
    console.log("Result: " + s);
}