// Assignment code here
var characterLength = 8;
var choiceArr = []

var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "?"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var generateBtn = document.querySelector("#generate");






generateBtn.addEventListener("click", writePassword);






    




// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
    if(correctPrompts) {
      var password = generatePassword();
      passwordText.value = password;
  } else {
    passwordText.value = "";
  }

}

function getPrompts (){
  choiceArr = [];
  characterLength = parseInt(prompt("How long do you want your password to be? (8-128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128");
    return false;
  }
  if (confirm("Include lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Include uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Include special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Include numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}


function generatePassword(){
  var password = "";
  for(var i =0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}







