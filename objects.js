"use strict"
// Objektai - 
let puodukas = {
    turis: 300,
    kiekis: 200,
    spalva: "rudas"
}
console.log(puodukas.gerimas);
puodukas.gerimas = "kava";
/* JS nueina, patikrina objektą, jeigu jo neranda,
   sukuria. Šiuo atveju ateis ir į objektą įdės kintamąjį
   gerimas: "kava"
 */
console.log(puodukas.gerimas);

puodukas.kiekis -= 50;

console.log(puodukas.kiekis);
console.log(puodukas.spalva);

let tasPatsPuodukas = puodukas;
tasPatsPuodukas.spalva = "zalia";
console.log(puodukas.spalva);
//console.log(puodukas);

// Ar kintamieji į tą patį puoduką rodo
if (puodukas === tasPatsPuodukas) {
    console.log("Tas pats puodukas");
} else {
    console.log("Kitas objektas");
}

let tasPatsPuodukas = {
    turis: 300,
    kiekis: 250,
    spalva: "zalias"
}

if (puodukas === tasPatsPuodukas) {
    console.log("Tas pats puodukas");
} else {
    console.log("Kitas objektas");
}

console.log("=== Galima kurti objektą be savybių pradžioje ===");
let lekste = {};
lekste.forma = "apvali";
lekste.spalva = "balta";
lekste.diametras = "30"

// savybę taip pat galime ištrinti
delete lekste.forma;

console.log(lekste);

/* 
kitokia sintakse galime pakeisti savybės reikšmę
suranda savybę kiekis ir priskiria 20
 */
lekste["diametras"] = 20;
lekste.diametras = 20;

console.log(lekste);

//nueis į puoduką, suras savybę tūris 
let savybe = "grazi";
// ir atspausdins savybę = "grazi"
console.log(lekste[savybe]);
console.log(lekste);

/* Jeigu bandom gauti reikšmę savybės kurios nėra,
 tada gražins "undefined"*/

// 1. Jeigu priskiriu reikšmę savybei, kurios nėra,
// 2. Tokiu atveju JS sukurs savybę ir įdės į objektą
// 3. Galimą savybę ištrinti su "Delete objekto name.savybės name"


/* 
Tokiu užrašymu pažiūrės ar tokia savybė yra, neras
 sukurs ir pasakys, kad jo reikšmė yra stiklas
 */
puodukas["medžiaga"] = "stiklas";

console.log("=== 1 ===");

/*
Atsirado objektas "zmogus"
Savybės : vardas, pavardė
ir kitas objektas su savomis savybėmis
 */
let s = "gatve";

let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    adresas: {
        miestas: "Vilnius",
        gatve: "Gedimino",
        namas: 9
    }
};

//Užrašymo būdai
console.log(zmogus.adresas.gatve);
console.log(zmogus["adresas"].namas);
console.log(zmogus["adresas"]["miestas"]);
console.log(zmogus.adresas["miestas"]);