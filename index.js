"use strict";

var sk1;
var sk2;
var sk3 = 4;
var text = "This is a text";
// Kintamųjų galimi name'ai: a-z A-Z $ _ 0-9
console.log(text);

sk1 = 5;
sk2 = 7;

var rez;

rez = sk1 + sk2 / sk3 * sk1
rez = rez

/*
var - kintamojo deklaravimas
= reikšmės priskyrimas kintamajam
+ - sudėtis 
- - atimtis
/ - dalyba
* - daugyba

Seka priklauso nuo 'Associativity" stulpelio, seka, nuo didžiausio, iki mažiausio.
Kai yra keli operatoriai su tais pačiais "Precedence" tada įsijungia "Associativity" associativyti stulpelis (žiūrėti operators link'ą)
 */

console.log(rez);
/*
0000 0 0
0001 1 1
0010 2 2
0011 3 3
0100 4 4
0101 5 5
0110 6 6
0111 7 7
1000 8 8
1001 9 9
1010 10 A
1011 11 B
1100 12 C
1101 13 D
1110 14 E
1111 15 F

5 F3C
5 * 16 ^ 3 + 15 * 16 ^ 2 + 3 * 16 ^ 1 + 12 * 16 ^ 0 = 243080
*/


/* 
\\ - \ (vienas simbolis)
\' = ' (vienas simbolis)
\ " = " (vienas simbolis)
\t - TAB (kodas 09)
\n - LF line feed (kodas 0A arba 10)
\r - CR carridge return (kodas 0D arba 13)
\uxxxx - xxxx sesioliktainis simbolio kodas
 */

var tekstas = 'c \u4EFB ia \\\\ y\tr\ta \ "\'specialus\'\" tek\r\nstas';
var tekstas1 = "Labas"
var tekstas2 = tekstas1 + " pasauli"
console.log(tekstas2);

var no1 = "15";
var no2 = "5";

console.log(no1 + no2);

var no3 = 5;
var no4 = 6;
console.log("" + no1 + no2 + no3 + no4);
// Kai įdedame String'ą prieš kintamąjį, kuris yra ne string'as, tokiu atveju kitas kintamasis paverčiamas į tekstą.

//boolean - naudojamas loginėms operacijoms.
var b = true;
var b1 = false;

// if statment

var sk1 = -15;

if (sk1 > 10) {
    console.log("didelis")
    sk1 = sk1 * 10;
    console.log(sk1);
} else {
    console.log("vidurys");
}
console.log("pabaiga");

if (!(0 <= sk1 & sk1 <= 9)) {
    /* 
    0 <= 5  false
    5<= 9   true
    false & true = false
    Turime dar neiginį, tai rezultatas bus = True
    Tokiu atveju kai abi sąlygos užrašytos, tai abi turi būti tenkinamos, kad gauti TRUE
    */
    console.log("vienazenklis");
} else {}

var sk = 1;
while (sk <= 100) {
    if (sk % 5 === 0 || sk % 2 === 0) {
        console.log(sk);
    }
    sk = sk + 1;
}
console.log("pabaiga111")

var nuo = 2;
var iki = 4;

var i = 2;
while (i <= iki) {
    var j = nuo;
    while (j <= iki) {
        console.log(i * j);
        j = j + 1;
    }
    i = i + 1;
}
console.log("pabaiga sandaugos");

//====== Rasti pirminius skaičius ======//