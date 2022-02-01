// Write a JavaScript function which accepts an argument and returns the type.

function findDataType(value) {
  var dtypes = [Object, Boolean, Function, Number, String, RegExp],
    x,
    len;

  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }

  return typeof value;
}
console.log(findDataType(12));
console.log(findDataType("ashesh"));
console.log(findDataType(false));
