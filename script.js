// Assignment code here

// 1. create arrays with all possible characters in password
// 2. use query selector on #generate button
// 2. create prompts for the password when clicking the #generate button
//    a.function that ensures password is bewteen 8 and 128 characters
//    b.function to incorporate inputs from other prompts
//    c.array for password characters must be controlled by user input from prompts
// 3. create function to generate a password based on user input
// 4. finish function to write password 
var charArr = []
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "?"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterLength = "";


var generateBtn = document.querySelector("#generate");

function getPrompts (){
  // this will pull up the choice array
  charArr = [];
  // the parseInt will return interpret the string that the user inputs, and return it as a number for the function
  characterLength = parseInt(prompt("How long do you want your password to be? (8-128 characters"));
  // on this if statement isNaN is checking if the input is not a number, then the ranges
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128");
    return false;
  }
  // if the input is not a number or if it is smaller than 8 or if it is larger than 128
  // give an alert telling them to go again. Return false brings them back to the main page

  // for each confirm, the choiceArr will add the other choice arrays
  if (confirm("Include lowercase letters?")) {
    charArr = charArr.concat(lowerCaseArr);
  }
  if (confirm("Include capital letters?")) {
    charArr = charArr.concat(capitalArr);
  }
  if (confirm("Include special characters?")) {
    charArr = charArr.concat(specialCharArr);
  }
  if (confirm("Include numbers?")) {
    charArr = charArr.concat(numbersArr);
  } 
  return true;
  // it returns true as long as the selected length is between 8 and 128,
  // however, the choiceArr array will be bigger or smaller based on user selection
}

function showPassword() {
  // using the getPrompts function we called as a variable to create a function to show the password
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
    if(correctPrompts) {
      var password = generatePassword();
      passwordText.value = password;
  } else {
    passwordText.value = "";
  }
// if the value of variable correctPrompts is true, display the text of the variable password, which will be generated in a function
}

function generatePassword(){
  var password = "";
  for(var i =0; i < characterLength; i++) {
    var randomizer = Math.floor(Math.random() * charArr.length);
    password = password + charArr[randomizer];
  }
  return password;
}
// function generatePassword pulls up variable password, which is an empty string 
// loop so that the index starts at 0, if i is less than characterLength, then add a character
// math.random pulls up a random number, math.floor turns it to an integer
generateBtn.addEventListener("click", showPassword);









