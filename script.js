
let Numbers = [1, 2, 3, 4, 5];

console.log(Numbers[0]);// 1

console.log(Numbers[4]);// 5

for (let i=0; i < Numbers.length; i++) {
    console.log(Numbers[i]);
}

Numbers.push(6, 7, 8, 9, 10);

console.log(Numbers) /* [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
The new values appeared after the previous ones
*/
console.log(Numbers.pop());
console.log(Numbers.pop());
console.log(Numbers.pop());

console.log(Numbers) // [1, 2, 3, 4, 5, 6, 7]

let myString = "Hello World!"
console.log(myString.length)