var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", ":", "|", ".", "<", ">", "/", "?", "]", "+", "/"];

var hasSymbols = confirm ('Use symbols')
var hasNumbers = confirm ('Use symbols')
var hasLowerCase = confirm ('Use symbols')
var hasUpperCase = confirm ('Use upper case')

var superArray = []
var password = [];

if (hasSymbols) {
    superArray = superArray.concat(symbols)
}

if (hasNumbers) {
    superArray = superArray.concat(numbers)
}

if (hasLowerCase){
    superArray = superArray.concat(lowerCase)
}

if (hasUpperCase){
    superArray = superArray.concat(lowerCase)
}

for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * superArray.length)
    password.push(superArray[randomNumber]) 
}

var finalPassword = password.join('');

console.log(finalPassword);