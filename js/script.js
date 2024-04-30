
// ELEMENTS
const ageInput = document.getElementById('ageInput');
const dayInput = document.getElementById('dayInput')
const outputResult = document.getElementById('outputResult');
const inputForm = document.getElementById('inputForm');


function getResult() {

  // Get user input, years of age
  let age = Number(ageInput.value);
  
  // Get day of week
  let day = dayInput.value;

  // Scenarios:
  
  // When the user does not enter their age, it should prompt the user to enter their age
  // When the user does not select a day, it should prompt the user to enter a day
  // When the user’s age is negative, it should prompt the user to enter a valid age
  // When the user’s age is a decimal, it should prompt the user to enter a valid age

  // if they are younger than 5 or older than 95, they get in for FREE
  // otherwise, if they are between 12 and 21 years old, OR if it is Tuesday or Thursday, they get a DISCOUNT (student price)
  // otherwise they have to pay REGULAR price

  let message = "";
  if (isNaN(age)) {
    // Redundant, because Number() automatically parses empty input as 0
    message = "Please Enter Positive Integer for Age!";
  }
  else if ((age <= 0) || (age % 1 != 0)) {
    message = "Please Enter Positive Integer for Age";
  }
  else if (!day) {
    // When the user does not select a day, it should prompt the user to enter a day
    // Redundant, this situation cannot happen
    message = "Please Enter a Day";
  }
  else if (age < 5 || age > 95) {
    message = "You can get in for FREE! 🥳🎉";
  }
  else if ((age > 12 && age < 21) || (day=="Tuesday" || day=="Thursday")) {
    message = "You get a discount! 🥳";
  }
  else {
    message = "YOU PAY REGULAR PRICE! 👹👺👿 ";
  }

  // Display result
  outputResult.innerText = message;

  return;
}

// Cool function notation
// form validation + submit call
inputForm.onsubmit = () => {
  getResult();
  return false;
}