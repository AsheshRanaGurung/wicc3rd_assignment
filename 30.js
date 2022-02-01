function multiply() {
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;
  var result = number1 * number2;
  document.getElementById("result").innerHTML = result;
}

function divide() {
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;
  var result = number1 / number2;
  document.getElementById("result").innerHTML = result;
}
