// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log("the position of word because without spliting words of the sentence as an array is " + sentence.indexOf("because"));
let arr = sentence.split(" ");
console.log(arr);
console.log("the position of word because with spliting words of the sentence as an array is " + arr.indexOf("because"));