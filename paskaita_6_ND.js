console.log("==== Daugybos lentelė =====");
var nuoAA = 1;
var ikiBB = 5;
var c = 0;
var e = 0;

// 2. su ciklu for atspausdinti skaičius nuo 100 iki 1 kas 3;  Rezultatatas: 100, 97, 94 ir t.t.

for (var c = nuoAA; c <= ikiBB; c++) {
    for (var e = nuoAA; e <= ikiBB; e++) {
        console.log(c * e);
    }
}

console.log("==== Kas 3 skaičius atspausdinti =====");

var nuo = 100;
var iki = 1;

for (var x = nuo; x >= iki; x -= 3) {
    console.log(x);
}