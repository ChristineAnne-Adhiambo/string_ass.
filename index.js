//Extracting a character from a String
let str = "beautiful";
let last4 = str.slice(-4);
console.log(last4);

// //Inserting Characters
// const food = "I was feeling hungry today";
// let add = "eat"
//
let food ="I was feeling hungry today"
let food2 = "eat";
let position = 4;
let result = [food.slice(0,4),food2,food.slice(4)].join('');
console.log(result) 


// // Count how many times the following string appears in the string variable:
// // 1. "the"
// // 2."brown"
 let story= "The quick brown fox jumps over the lazy dog";
 let count1 =story.split("brown").length-1;
 let count2 =story.split("the").length-1;
 console.log(count1);
 console.log(count2);

//using JavaScript,find the following words from the following strings:
//1.now
//2.sitting
let strng = "We are now going to school";
let substring1="now";
let strng1 = "The child was sitting on the table before it fell";
let substring2 = "sitting";
console.log(strng.includes(substring1));
console.log(strng1.includes(substring2));


//Convert the following strings into the specified format:
//1.Uppercase:"wonderful"
//2.Lowercase:"AMAZING","BEneath"
let word = "wonderful";
let converted1 = word.toUpperCase();
console.log(converted1);
let word1 = "amazing";
let converted2 = word1.toLowerCase();
console.log(converted2);
let word2= "BEneath";
let converted3 = word2.toLowerCase();
console.log(converted3);


