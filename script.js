// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCases = "abcdefghiklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";


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
  var passwordLength = prompt("Choose a number of characters for your password. It must be at least 8 characters and no more than 128 characters.");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");
  var minimumCount = 0;
  var minimumNumbers = "0123456789";
  var minimumLowerCases = "abcdefghiklmnopqrstuvwxyz";
  var minimumUpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var minimumSpecialCharacters = "!@#$%^&*()";
  
//Generator functions
  var functionArray = {
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 80));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 80));
    },
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 30));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * 10)]
    }
  };
  
  //Check to make sure user selected ok for all and uses empty minimums from above
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases ();
    minimumCount++;
  }
  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }
  
  var randomPasswordGenerated = "";
  
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 1);
    randomPasswordGenerated += randomNumberPicked;
  }
  
  //empty string variable for the for next loop 
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }
  
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;
 
}