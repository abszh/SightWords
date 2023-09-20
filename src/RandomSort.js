export default function RandomSort(words, seed) {
    while (orderedWords.length < words.length) {
        let index = Math.floor(random(seed++) * words.length);
        let theWord = words[index];
        if (!orderedWords.includes(theWord)) {
            orderedWords.push(theWord);
        }
    }

    return orderedWords;
}

// from https://stackoverflow.com/a/19303725
function random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
