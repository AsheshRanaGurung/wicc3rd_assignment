// Write a JavaScript function to get the function name.

function getFuncName() {
  return getFuncName.caller.name;
}

function abc() {
  console.log(getFuncName());
}
abc();
