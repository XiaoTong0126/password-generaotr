// Assignment code here
function generatePassword() {
  // 1. get password length
  var length = getLength()

  // 2. get character type
  while (true) {
    var lowercase = confirm("Include lowercase characters");
    var uppercase = confirm("Include uppercase characters");
    var numeric = confirm("Include numeric characters");
    var special = confirm("Include special characters");

    if (lowercase || uppercase || numeric || special) {
      break;
    }
    else {
      alert("Should include at least one character type");
    }
  }

  // 3. generate password
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numericChars = '0123456789'
  var specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'

  var passwordOptions = ''
  if (lowercase) {
    passwordOptions = passwordOptions + lowercaseChars
  }
  if (uppercase) {
    passwordOptions = passwordOptions + uppercaseChars
  }
  if (numeric) {
    passwordOptions = passwordOptions + numericChars
  }
  if (special) {
    passwordOptions = passwordOptions + specialChars
  }

  var password = ''
  for (var i = 0; i < length; i++) {
    password = password + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  }

  return password
}

// a function for password length
function getLength() {
  var userInput = parseInt(prompt("Please input password length (at least 8 characters and no more than 128 characters."));
  // check if userInput is number
  while (isNaN(userInput)) {
    userInput = parseInt(prompt("Invalid Input. Please input password length (at least 8 characters and no more than 128 characters."));
  }

  // check length
  while (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt("Invalid length. Please input password length (at least 8 characters and no more than 128 characters."));
  }

  return userInput
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
