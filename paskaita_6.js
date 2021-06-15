const { isNumberLiteralTypeAnnotation } = require("@babel/types");

var sk = 3;

console.log("==== Veiksmas 1 =====");

console.log("Kai sk++, gaunu: " + sk);
sk++;
// paėmiau kintamąjį sk, pridėjau 1 ir padėjau atgal;
console.log("Kai ++sk, gaunu: " + sk);
++sk;
//sk += 1;
//sk = sk + 1;

console.log("==== Veiksmas 2 =====");

var sk1 = 3;
var kitas = 5 + sk1++; // Padidina vienetu (++ precedence yra aukščiausias)
//              paimame sk reikšmę (3) ir atsimename
//              padidiname sk 1-tu
//              sk pasidarys sk = 4;
//              bet toliau naudosime pirminę reikšmę (3)
//              į kitas padedame 8
// Jeigu pliusiukai priekyje "..++skaičius..", tai skirtumas tas, kad pradžiai padidiname reikšmę ir naudojame jau tą padidintą
// Jeigu gale "..skaičius.. ++", tai pradžioje padidina ir naudoja sąlygose nepadidintą reikšmę.

console.log(sk1);
console.log(kitas);

console.log("==== Veiksmas 3 =====");

var sk2 = 3;
var kitas2 = 10 - ++sk2 + sk2++ - ++sk2;
// padidiname sk2 1-tu --> sk2: 4
// paimame sk2 reiksme (4)  
//  paimame sk2 reiksme (4)  ir astimename 
//padidiname sk2 1-tu --> sk2: 5
//padidiname sk2 1-tu --> sk2: 6
//paimame sk2 reiksme (6)
// 10-4
// 6  +4
// 10   -6
// 4
console.log(sk2);
console.log(kitas2);

console.log("==== Veiksmas 4 =====");
var sk3 = 1;
while (sk3 < 3) {
    console.log(++sk3);
    //paimam (1), padidiname ir naudojame padididintą --> spausdiname 2;
    //paimam sk3 (2), padidiname ir naudojame padididintą --> spausdiname 3;
}

console.log("==== Veiksmas 5 =====");
var sk3 = 1;
while (sk3 < 3) {
    console.log(sk3++);
    //paimam (1) ir atsimenam
    //padidinam sk3 i --> 2
    //spausdiname reiksme (2)
}

console.log("==== Veiksmas 6 =====");
var sk6 = 3;
while (sk6 > 0) {
    console.log(--sk6);
    //paimam (3), atimu ir naudojame atimtą --> spausdiname 2;
    //paimu sk3 (2), atimu ir naudojame atimtą --> spausdiname 1;
    //paimu sk3 (1), atimu ir naudojame atimtą --> spausdiname 0;
}

console.log("==== Veiksmas 7 =====");
var sk7 = 3;
while (sk7 > 0) {
    console.log(sk7--);
    //paimu sk7 (3), naudoju nepamažintą --> 3;
    //paimu sk7 (3), naudoju nepamažintą --> 2;
    //paimu sk7 (2), naudoju nepamažintą --> 1;
}

console.log("==== for ciklas =====");
for (var i = 1; i < 4; i++) {
    console.log(i);
}

/* for (var i = 1 (1); i < 4 (2); i++(4)) {
     log(i)(3);
}*/

// susidari iš trijų dalių
// pirma dalis visada bus įvykdyta
// antra dalis - jeigu i <4, tada vykdome
// einame vykdyti 3 dalį;
//tada darome 4

console.log("==== Use strict =====");
console.log(sk10); // Išspausdins "undefined", nes nesame deklaravę.
var sk10 = 10;
console.log(sk10);
// kintamieji gali b8ti "Hoistiname" - tai yra perkeliami.