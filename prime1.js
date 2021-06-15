var i = 2;

while (i <= 10000) {
    var arPirminis = true;
    var atgal = i - 1;
    while (atgal >= 2 && arPirminis) {
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