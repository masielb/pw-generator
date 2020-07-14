// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts for password criteria
function generatePassword() {
  var passwordLength = prompt("Choose a number of characters for your password.");
  
// Variables  
var passwordLength = "";
var confirmNumbers;
var confirmLowerCases;
var confirmUpperCases;
var confirmSpecialCharacters;
  
//Setting up criteria
  while (passwordLength <= 7 || passwordLength >= 129 ) {
    alert("Password length must be between 8-128 characters. Please try again");
    var passwordLength = (prompt("Choose a number of characters for your password. It must be at least 8 characters and no more than 128 characters."));
    }  
    alert(`Your password will have ${passwordLength} characters`); 
  {
    var confirmLowerCases = confirm("Do you want lowercases in your password?");
    var confirmUpperCases = confirm("Do you want uppercases in your password?");
    var confirmNumbers = confirm("Do you want numbers in your password?");
    var confirmSpecialCharacters = confirm("Do you want special characters in your password?");
  }

  var passwordCharacters = []
  if (confirmSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }

  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }
    
  if (confirmLowerCases) {
    passwordCharacters = passwordCharacters.concat(lowerCases)
  }

  if (confirmUpperCases) {
    passwordCharacters = passwordCharacters.concat(upperCases)
  }
  
  //empty string variable for the for loop 
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (var i = 0; i < passwordLength; i++) {
    randomPasswordGenerated = randomPasswordGenerated + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPasswordGenerated;
}