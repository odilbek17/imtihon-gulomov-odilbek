function aylantir(k) {
    let original = [1, 2, 3, 4, 5, 6, 7];

    let natija = [];

    let len = original.length;

    k = k % len;

    for (let i = 0; i < len; i++) {

        let yangiIndex = (i - k + len) % len;
        
        natija[i] = original[yangiIndex];
    }

    return natija;
}

console.log(aylantir(3));
