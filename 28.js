//Write a program that finds a  random number from a given array.

var numbers = ["1", "2", "3", "4", "5"];
var randNumber = numbers[Math.floor(Math.random() * numbers.length)];
console.log(randNumber);
