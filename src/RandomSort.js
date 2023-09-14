export default function RandomSort(words) {
    let orderedWords = [];
    while (orderedWords.length < words.length) {
        let index = Math.floor(Math.random() * words.length);
        let theWord = words[index];
        if (!orderedWords.includes(theWord)) {
            orderedWords.push(theWord);
        }
    }

    return orderedWords;
}
