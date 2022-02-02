// 1. Write a program to take a string input and display its length and last character.

// var string = "ashesh";
// var last_ch = string.charAt(string.length - 1);
// console.log("the length of string is " + string.length);
// console.log("the last character of string is " + last_ch);

// 2.  Write a program to count occurrences of a certain character in a given string.

// var string = "Hello,my name is ashesh";
// var count = string.match(/e/g).length; //used Regular expression-g vaneko global ,so that ekchoti e vetepani  continuosly e khojirakhxa
// console.log("the number of letter is " + count);

// 3. Write a program that takes a string input and find distinct characters in the string.

// function findDistinctCharacter(str) {
//   let disticnt_character = "";

//   for (let i = 0; i < str.length; i++) {
//     if (disticnt_character.includes(str[i]) === false) {
//       //alphabet distinct_character ma xaina vane dictinct_char vitra rakhxa
//       disticnt_character += str[i];
//     }
//   }
//   return disticnt_character;
// }
// console.log(findDistinctCharacter("Apple"));

// 4. Your are given a string “hello_i_am_string” convert the given string to:

// str = "hello_i_am_string";
// console.log("Original String: ", str);

// for-------helloIAmString

// let temp = str.split("_");
// for (let i = 1; i < temp.length; i++) {
//   temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
// }

// console.log(temp.join(""));

//for -----hello i am string

// let temp = str.split("_");
// let output = temp.join(" ");
// console.log(output);

//for------Hello I Am String
// let temp = str.split("_");

// for (let i = 0; i < temp.length; i++) {
//   let newString = temp[i][0].toUpperCase() + temp[i].slice(1);
//   temp[i] = newString;
// }

// console.log(temp.join(" "));

// output4 = str
//   .replace(/_/g, " ")
//   .replace(/h/g, "H")
//   .replace(/i/i, "I")
//   .replace(/a/g, "A")
//   .replace(/s/g, "S");
// console.log(output4);

// let output5 = str.toUpperCase().replace(/_/g, "");
// console.log(output5);

// 5. Write a program that takes the string input and reverse the string and print it.

// let string = "ashesh";

// function reverseString(string) {
//   let reverse = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i];
//   }
//   return reverse;
// }
// console.log(reverseString(string));

// 6. Write a program to find the number of uppercase and lower case characters in a string.

// function Count(str) {
//   let upper = 0;
//   let lower = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") upper++;
//     else if (str[i] >= "a" && str[i] <= "z") lower++;
//     else {
//       console.log("not alphabet");
//     }
//   }
//   console.log("Upper case letters: " + upper);
//   console.log("Lower case letters : " + lower);
// }
// let str = "ASHesh";
// Count(str);

// 7. Write a program to take a string input and sort it alphabetically.

// function sortThisString(str) {
//   var arr = str.split(""); // splits the string
//   result = arr.sort().join(""); // sort the array and joins to form a string
//   return result;
// }

// console.log(sortThisString("asheshranagurung"));

// 8. Write a program to check if the word 'orange' is present in the "This is orange juice".

// let checkThisSentence = "This is orange juice";
// let word = "orange";

// function isWordPresent(checkThisSentence, word) {
//   let s = checkThisSentence.split(" "); //sentence lai word ma tukrayo

//   for (let temp = 0; temp < s.length; temp++) {
//     // Comparing the current word with the word to be searched
//     if (s[temp] === word) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(checkThisSentence);
// if (isWordPresent(checkThisSentence, word)) {
//   console.log("It has word orange");
// } else {
//   console.log("It doesn/t have word orange");
// }

// 9. Write a program to find the number of vowels, consonants, digits and white space characters in a string.

// let str = "My name is Ashesh@123";

// function countCharacterType(str) {
//   let vowels = 0,
//     consonant = 0,
//     whitespace = 0,
//     digit = 0;

//   for (var i = 0; i < str.length; i++) {
//     var ch = str[i]; //string ko harek alphabet,space ganera ya rakhyo

//     if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
//       ch = ch.toLowerCase(); //uppercase lai lowercase ma convert gareko

//       if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
//         vowels++;
//       else consonant++;
//     } else if (ch >= "0" && ch <= "9") digit++;
//     else if (ch == " ") whitespace++;
//   }
//   console.log("Vowels: " + vowels);
//   console.log("Consonant: " + consonant);
//   console.log("Digit: " + digit);
//   console.log("Whitespace: " + whitespace);
// }

// countCharacterType(str);

// 10. Write a program to return a string with the characters of the odd index position from a given string.

// let string = "Javascript";

// function removeOddIndex(str) {
//   let oddIndex = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 == 0) {
//       //javascript ma we want J ,jun index 0 ho
//       oddIndex += str[i];
//     }
//   }
//   return oddIndex;
// }
// console.log(removeOddIndex(string));

//11. Write a program to test if a given string contains only numbers and returns true or false.

// let _string = 1234;
// function checkIfStringHasOnlyDigits(_string) {
//   if (/^\d+$/.test(_string)) {
//     console.log("True");
//   } else {
//     console.log("false");
//   }
// }
// console.log(_string);
// checkIfStringHasOnlyDigits(_string);

//12. Write a program that accepts two integers as an argument and return its sum.

// let a = 2;
// let b = 3;

// function add(a, b) {
//   let s = a + b;
//   return s;
// }
// console.log(add(a, b));

// 13. Write a program to print the circumference and area of a circle of radius .

// function circle(radius) {
//   this.radius = radius;

//   this.area = function () {
//     return Math.PI * this.radius * this.radius;
//   };
// }
// var c = new circle(3);
// console.log("Area =", c.area());

//15. Write a program to check whether a given number is even or odd.

// let number = 2084;

// function oddOrEven(number) {
//   if (number % 2 == 0) {
//     console.log("It is even");
//   } else console.log("It is odd");
// }

// oddOrEven(number);
