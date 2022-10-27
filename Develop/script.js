var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", ":", "|", ".", "<", ">", "/", "?", "]", "+", "/"]

//initializing an empty array to be used to create a password
var superArray = []
var CharactersR = prompt("How long you want your password to be? (8 to 128)", "");
var upperCaseR = prompt("Do you want upperCase?", "Y/N");
var lowerCaseR = prompt("Do you want lowerCase?", "Y/N");
var symbolsR = prompt("Do you want symbols?", "Y/N");

//// Created mix and match of each possible array  ////
var upperCaseLowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", ":", "|", ".", "<", ">", "/", "?", "]", "+", "/"]
var lowerCaseSymbols =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", ":", "|", ".", "<", ">", "/", "?", "]", "+", "/"]
var upperLowerSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", ":", "|", ".", "<", ">", "/", "?", "]", "+", "/"]


//This function grabs the superArray variable and slices it according to the input of the user. This function should only be used after shuffle
function cutSuperArray(CharactersR){
  superArray = superArray.slice(0,CharactersR);
}

//This function shuffles the superArray to randomize the array
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// if user selects "Y" to upperCase or clicks "OK", then add uppercase array to superArray
if ((upperCaseR === "Y" || upperCaseR === "") && (lowerCaseR === "N" || lowerCaseR === null) && (symbolsR === "N" || symbolsR === null)) {
  superArray = upperCase
// if user selects "N" OR clicks Cancel, then don't add anything to super Array
} else if ((lowerCaseR === "Y" || lowerCaseR === "") && (upperCaseR === "N" || upperCaseR === null) && (symbolsR === "N" || symbolsR === null)) {
  superArray = lowerCase
// if user selects "N" OR clicks Cancel, then don't add anything to super Array
} else if ((symbolsR === "Y" || symbolsR === "") && (upperCaseR === "N" || upperCaseR === null) && (lowerCaseR === "N" || lowerCaseR === null)) {
  superArray = symbols
// if user selects "N" OR clicks Cancel, then don't add anything to super Array
} else if ((upperCaseR === "Y" || upperCaseR === "") && (lowerCaseR === "Y" || lowerCaseR === "") && (symbolsR === "N" || symbolsR === null)) {
	superArray = upperCaseLowerCase
} else if ((upperCaseR === "Y" || upperCaseR === "") && (lowerCaseR === "N" || lowerCaseR === null) && (symbolsR === "Y" || symbolsR === "")) {
	superArray = upperCaseSymbols
} else if ((lowerCaseR === "Y" || lowerCaseR === "") && (upperCaseR === "N" || upperCaseR === null) && (symbolsR === "Y" || symbolsR === "")) {
	superArray = lowerCaseSymbols
} else if ((upperCaseR === "Y" || upperCaseR === "") && (lowerCaseR === "Y" || lowerCaseR === "") && (symbolsR === "Y" || symbolsR === "")) {
	superArray = upperLowerSymbols
} else {
  alert("All of your selections were 'N'. we cannot create a password, if you don't make any selections. Stop trying to break my code 🧐")
}


//call the function shuffleArray to randomize the superArray
shuffleArray(superArray)

while (superArray.length > CharactersR){
  superArray.concat(superArray)
}

while (i < CharactersR) {
  superArray.push([i]);
  i++
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





