var i = 2;
//Ar i <= 2
while (i <= 100) {
    // Jeigu true, tai vykdysime visą bloką
    var arPirminis = true;
    var atgal = i - 1;
    while (atgal >= 2) {
        if (i % atgal === 0) {
            arPirminis = false;
        }
        atgal = atgal - 1;
    }
    if (arPirminis) {
        console.log(i);
    }
    i = i + 1;
}