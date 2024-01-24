let text = "himanshu is live in nagpur";
const words = text.split(" ");
let Array1 = [];
let Array2 = [];
console.log(words);
for (let word of words) {
  word.length > 6 ? Array1.push(word) : Array2.push(word);
}
console.log(Array1);
console.log(Array2);
