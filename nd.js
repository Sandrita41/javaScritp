let m = [5, 87, -5, 3, -4];
/*
surusiuoti masyva didejimo tvarka
atspausdiniti
*/
/*
surusiuoti masyva mazejimo tvarka
atspausdiniti
*/

max = m[0];
for (let i = 0; i < m.length; i++) {
    if (m[i] > max) {
        max = m[i];
    }
    console.log(max);
}

a = 5;
b = 10;

seka = b;
a = b;
b = seka;

console.log("Reiksme a: " + a);
console.log("Reiksme b: " + b);