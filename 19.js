//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
var countries = ["japan", "southkorea", "china", "thailand", "russia"];

function Longest_Country_Name(countries) {
  let longestCountry = countries[0];
  for (let country of countries) {
    if (country.length > longestCountry.length) {
      longestCountry = country;
    }
  }
  return longestCountry;
}
console.log(Longest_Country_Name(countries));
