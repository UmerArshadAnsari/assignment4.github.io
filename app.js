var birthDate = prompt("Enter your date of birth:");
var birthMonth = prompt("Enter your month of birth :");
var birthYear = prompt("Enter your year of birth :");

var monthNumber = new Date(Date.parse(birthMonth + " 1, 2000")).getMonth() + 1;

if (isNaN(monthNumber)) {
  alert("Invalid month name. Please enter a valid month name.");
} 
else {

  var currentDate = new Date();

  var birthdate = new Date(birthYear, monthNumber - 1, birthDate);

  var ageInMilliseconds = currentDate - birthdate;

  var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

  ageInYears = ageInYears.toFixed(3);

  alert("You are currently " + ageInYears + " years old.");
}

