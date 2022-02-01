//Write a JavaScript function to get the month name from a particular date.

function monthName(dt) {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[dt.getMonth()];
}

console.log(monthName(new Date("11/06/1999")));
