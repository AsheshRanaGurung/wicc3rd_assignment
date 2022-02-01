function convertDecimal(n, numbersystem) {
  switch (numbersystem) {
    case "binary":
      return n.toString(2);
      break;
    case "hexa":
      return n.toString(16);
      break;
    case "octal":
      return n.toString(8);
      break;
    default:
      return "Wrong entry";
  }
}
console.log(convertDecimal(10, "octal"));
console.log(convertDecimal(11, "binary"));
console.log(convertDecimal(99, "hexa"));
