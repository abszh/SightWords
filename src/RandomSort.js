export default function RandomSort(words, seed) {
    // make a copy so that we do not modify the input array
    let remainingWords = [...words];

    let orderedWords = [];
    while (orderedWords.length < words.length) {
        // randomly pick one word from the remaining words
        let index = Math.floor(random(seed++) * remainingWords.length);
        let theWord = remainingWords[index];

        // add the picked word to the output list
        orderedWords.push(theWord);

        // remove it from the remaining words
        remainingWords.splice(index, 1);
    }

    return orderedWords;
}

// from https://stackoverflow.com/a/19303725
function random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
