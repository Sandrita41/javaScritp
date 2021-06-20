"use strict"
// Masyvas - tai sąrašas elementų
let m = [5, 87, "labas", false, "!", 5];
console.log(m[2]);

m[1] = true;
console.log(m.length);

// 
let km = m;
km[0] = "pakeičiau";
console.log(m);
console.log(km);

// Masyvas JS'e yra objektas
/* 
1. Masyvas turi spec savybę "lenght"
2. 
 */

console.log("=== 1 ===");
console.log(m.length);
let m = [5, 87, 5, 3, 5, 87, 5, 35, 87, 5, 35, 87, 5, 3];
// Atsiranda kintamasis i ir jam priskiriam 0;
for (i = 0; i < m.length; i++) {
    console.log(m[i]);
}


let m = [5, 87, -5, 3, -4];
/*
surusiuoti masyva didejimo tvarka
atspausdiniti
*/
/*
surusiuoti masyva mazejimo tvarka
atspausdiniti
*/

for (let i = 0; i < m.length; i++) {
    if (m[i] < m[i + 1]) {
        console.log(m[i]);
    } else {
        console.log("pabaiga");
    }
}