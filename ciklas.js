console.log("===== Spausdiname skaičius nuo 1 iki 10 =====")
var i = 1;
while (i <= 10) {
    console.log(i);
    i += 1;
    // tas pats kas:  i = i + 1;
}
/*
+=  -> i += 2+3   ---> i = i+(2+3)
-=  -> i -= 2+3   ---> i = i-(2+3)
*=  -> i *= 2+3   ---> i = i*(2+3)
/=  -> i /= 2+3   ---> i = i/(2+3)
%=  -> i %= 2+3   ---> i = i%(2+3)
*/

console.log("===== Ciklas do-while =====")
    /*
    Atlieka ciklo kūna, tada tikrina sąlygą, jeigu sąlyga=TRUE, tada daro komandą, 
    jeigu FALSE, užbaigia, daro kitą komandą 
    */
var j = 1;
do {
    console.log(j);
    j += 4;
}
while (j <= 10);

console.log("===== Kas ketvirtą skaičių spausdiname =====")
while (i <= 10) {
    console.log(i);
    i += 4;
}
console.log("Finito");

// ciklas while prad=ioje tikrina salygą ir daro tik tada jei tenkina sąlygą.
// ciklas "do while" pirmiausia daro, tada tikrina (bent 1 kartą bus įvikdytas)