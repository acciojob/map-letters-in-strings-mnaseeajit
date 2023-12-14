//your JS code here. If required.
function mapLetters(word) {
    let obj = {};
    for (let i = 0; i < word.length; i++) {
        let arr = [];
        for (let j = 0; j < word.length; j++) {
            if (word[i] == word[j]) {
                arr.push(j);
            }
        }
        obj[word[i]] = arr; 
	
    }
    return obj;
}
// const word = prompt("Enter word");
// alert(mapLetters(word));

const word = prompt("Enter word");
const result = mapLetters(word);
alert(JSON.stringify(result));