/* 
2015m atsirado let ir const (es6 versija atsirado)
let - skirta deklaruoti kintamąjam
*/
/*
Kintamieji kurie deklaruojami su let ir const, nėra hoistinami
Jais galima naudotis tik tada, kai deklaruojame
 */

console.log("=== Pradžia ===");
let naujas = 2;
console.log(naujas);

console.log("=== 1 ===");
naujas = naujas + 5;
console.log(naujas);

console.log("=== 2 ===");
//console.log(konstanta);
//const konstanta = 15;

console.log("=== 3 ===");
//konstanta += 3;
//console.log(konstanta);

/* 
const - reikšmės pakeisti negalime. 
Jei tai darysime, mes klaidą.
*/

console.log("=== Kiti veiksmai ===");
var sk = 10;
var i = 10;
var i = i + 3;
var i = i * sk;

console.log(i);
console.log(sk);

console.log("=== Blokai ===");

console.log("Pradžia"); {
    let sk = 3;

    console.log("Komanda bloke", sk); {
        let sk = 7;
        let kitas = 5;
        //jeigu parašyčiau let sk, mestų klaidą, nes nedeklaruotas kintamasis
        console.log("Komanda vidiniame bloke 1");
        sk = sk * kitas;
        console.log("Komanda vidiniame bloke 2", sk, kitas);
    }
    console.log(sk);
    sk = 17;
    console.log("Kita komanda bloke", sk);
}

console.log("PABAIGA: " + sk);

//Vienas blokas vadinamas "skope'u"
/* Kintamasis deklaruotas su let ir const, 
gyvena nuo deklaravimo pradžios iki skope'o pabaigos

Kai yra var - 
*/



console.log("=== While'as su let ===");

let n = 1;
while (n < 3) {
    let m = 5;
    let n = 7;
    console.log(n++ * m);
}
console.log(n);
//console.log(m);
// Šituo atveju kadandi išorinis i yra nedidinamas, sąlyga visadabus TRUE ir nuolatos vikdys bloką. Spausdins "35"

console.log("=== Do let ===");
do {
    let h = 1;
    let g = 5;
    console.log(h++ * g);
} while (h < 3);
console.log(h);
// h - gyvena tik skliaustuose "do".
// Kai pradeda tikrinti "while", meta klaidą, kadangi jame i nėra
// Kintamąjį turime deklaruotis išorėje, kad visur panaudotų


console.log("=== Ciklas FOR ===");
for (let i = 1; i < 3; i++) {
    let i = 7;
    let k = 5;
    console.log(i * k);
}

/*
Jeigu nebūtų {}, tokiu atveju vistiek vikdytų kodą
Ciklas FOR turi savo bloką.
 */