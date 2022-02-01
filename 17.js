//Write a program that reverse a number.

function reversedNumber(num) {
  return parseFloat(
    //  parseFloat converts num into a float from a string.
    num.toString().split("").reverse().join("")
  );
}

num = 34122332;
console.log("Original number: " + num);

result = reversedNumber(num);
console.log("Reverse number: " + result);
