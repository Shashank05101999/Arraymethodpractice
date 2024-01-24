let text = "Shashank is live in nagpur";
const words = text.split(" ");
const Array1 = [];
const Array2 = [];
console.log(words);
for (let value of words) {
  if (value.length > 6) {
    Array1.push(value);
  } else {
    Array2.push(value);
  }
}
console.log(Array1);
console.log(Array2);
