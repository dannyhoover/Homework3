// Assignment Code

// Function to generate password
function generatePassword(){
  var characters = "";
  var charCount;

  // Error handling when choosing number of characters
  do {
    charCount = prompt("How long do you want the password to be? MUST BE AT LEAST 8 CHARACTERS AND NO MORE THAN 128 CHARACTERS ");
  }
  while (charCount < 8 || charCount > 128 || isNaN(charCount));


  // Loops that add strings of letters, characters, and numbers to empty string 'characters'
  if (confirm("Do you want special characters? ")) {
    characters += "!@#$%&?";
  }

  if (confirm("Do you want capital letters? ")) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if(confirm("Do you want lower case letters? ")) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (confirm("Do you want numbers? ")) {
    characters += "1234567890";
  }


  // Loop that adds random figures from updated characters list to a new list 'password'
  var password = "";

  for (var i = 0; i < charCount; i++) {
    var randNum = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randNum);
  }
  return password;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
