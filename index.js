//Extracting a character from a String
let str = "beautiful";
let last4 = str.slice(-4);
console.log(last4);

//Inserting Characters
const food = "I was feeling hungry today";
let add = "eat";
let pos= 4;
let output = [food.slice(0, pos), add, food.slice(pos)].join('');
console.log(output);

// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."brown"
// const story= "The quick brown fox jumps over the lazy dog"

const story= "The quick brown fox jumps over the lazy dog";
story.split(" ").forEach((word) => {
  const numberOfOccurrences = story.match(new RegExp(word, "g")).length
  console.log(`${word} - ${numberOfOccurrences}`)
});


//Lowercase & uppercase
const congrats = "A beautiful wedding";
const wed = congrats.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(wed);