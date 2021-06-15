var nuo = 1;
var iki = 3;
var i = 1;
var j = 1;


while (i <= iki) {
    var j = nuo;
    while (j <= iki) {
        console.log(i * j);
        j += 1;
    }
    i += 1;
}
console.log("Pabaiga");

var nuoA = 1;
var ikiA = 3;
var a = nuoA;


do {
    var b = nuoA;
    do {
        console.log(a, b, a * b);
        b += 1;
    }
    while (b <= ikiA);
    a += 1;
} while (kk);
console.log("Pabaiga Do While");