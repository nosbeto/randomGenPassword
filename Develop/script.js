var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", ":", "|", ".", "<", ">", "/", "?", "]", "+", "/"];


function generatePassword () {
var hasSymbols = confirm ('Do you want to use symbols?');
var hasLowerCase = confirm ('Do you want to use Lower case?');
var hasUpperCase = confirm ('Do you want to use Upper case');
var passLength = prompt ("Pick a number from 8 to 128");

var superArray = [];
var password = [];

if (hasSymbols) {
    superArray = superArray.concat(symbols)
}
if (hasLowerCase){
  superArray = superArray.concat(lowerCase)
}
if (hasUpperCase){
  superArray = superArray.concat(lowerCase)
}
if (superArray.length === 0){
  alert("All of your selections were 'N'. we cannot create a password, if you don't make any selections. Stop trying to break my code 🧐")
}
console.log("Super array", superArray)

// Randomizes the superArray to reduce the chances the function cutSuperArray slices the array equally every time
for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * superArray.length)
    password.push(superArray[randomNumber]) 
}

var finalPassword = password.join('');

return finalPassword

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





