let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let todaysDate = new Date();

let d = todaysDate.toJSON().slice(0, 10); //date lai direct slice garna mildaena,need to convert to string
console.log("todays date          : " + d);

let next3months = new Date(todaysDate.setMonth(todaysDate.getMonth() + 3));
let day = next3months.getDay(); // ya bata number aauxa day ko, sunday ho vane 0 return garxa,

var dayName = days[day];
console.log(
  "Date after 3 month is: " + next3months.toJSON().slice(0, 10),
  dayName
);
