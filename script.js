// Assignment Code
var generateBtn = document.querySelector("#generate");


var nums = "0123456789";

var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowCase = "abcdefghijklmnop"

var special = "~!@#$%^&*?"


var selection;

function writePassword() {
  passLength = 8;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){ 
  x = "string"
  userInput = prompt("Enter the number of characters you'd like for your new password (Select a number between 8-64)");
    if ((userInput > 64) || (userInput < 8)) {
      alert("Please enter a Valid Password length between 8-64")
      return
    }
    number = confirm("Include numbers in your new password?");
    specialCharacter = confirm("Include special characters in your new password?");
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confirm("Include lowercase letters?");


  if (number && specialCharacter && upperCase && lowerCase) {
    selection = special.concat(nums, lowCase, upCase);
  }
 
  else if (number && specialCharacter && upperCase) {
    selection = special.concat(nums, upCase);
  } else if (specialCharacter && upperCase && lowerCase) {
    selection = special.concat(letters, lettersUp);
  } else if (upperCase && lowerCase && number) {
    selection = upCase.concat(lowCase, nums);
  } else if (lowerCase && number && specialCharacter) {
    selection = lowCase.concat(nums, special);
  }
 
  else if (specialCharacter && number) {
    selection = special.concat(nums);
  } else if (number && upperCase) {
    selection = nums.concat(upCase);
  } else if (upperCase && lowerCase) {
    selection = upCase.concat(lowCase);
  } else if (lowerCase && number) {
    selection = lowCase.concat(nums);
  } else if (lowerCase && specialCharacter) {
    selection = lowCase.concat(special);
  } else if (specialCharacter && upperCase) {
    selection = special.concat(upCase);
  }

  password +- generatePassword(Math.random()* password.length);
  for (var i = 0; i < passLength; i++) {
  }
  return selection;
}


generateBtn.addEventListener('click', writePassword);