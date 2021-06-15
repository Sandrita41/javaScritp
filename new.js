var skaicius = 2; // skaicius tikrinimui
var prime = 1; // Ar skicius pirminis
var dal = 0;
var rez = 0;

while (skaicius <= 10) {
    console.log("========= Tikrinu skaiciu: " + skaicius + " ===========");
    dal = 2;
    while (prime != 0 & skaicius > dal) {
        console.log("Bandau dalinti is: " + dal);
        rez = skaicius % dal;
        if (rez != 0) { prime = 1 } else { prime = 0 }
        console.log("Dalybos rezultatas " + rez + " ir prime reikme " + prime);
        dal = dal + 1;
    }
    console.log("baigus tikrinti prime liko " + prime);
    if (prime != 0) { console.log("Prime number: " + skaicius); }
    console.log("baigiau tikrinti skaiciu " + skaicius)
    skaicius = skaicius + 1;
    prime = 1;
}


/*var skaicius = 2; // skaicius tikrinimui
var prime = 1; // Ar skicius pirminis
var dal = 0; // daliklis, kurio bandoma dalinti kiekviena skaiciu
var rez = 0 // liekana likusi po dalinimo

while (skaicius <= 100) {
    dal = 2;
    while (prime != 0 & skaicius > dal) {
        rez = skaicius % dal;
        if (rez != 0) { prime = 1 } else { prime = 0 }
        dal = dal + 1;
    }
    if (prime != 0) { console.log("Prime number: " + skaicius); }
    skaicius = skaicius + 1;
    prime = 1;
}*/