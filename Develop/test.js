
// if user selects "Y" to upperCase or clicks "OK", then add uppercase array to superArray
if (upperCaseR === "Y" || upperCaseR === "") {
    superArray = superArray.concat(upperCase)
  // if user selects "N" OR clicks Cancel, then don't add anything to super Array
  } else if (upperCaseR === "N" || upperCaseR === null) {
  } else {
    alert("All of your selections were 'N'. we cannot create a password, if you don't make any selections. Stop trying to break my code 🧐")
  }
  
  if (lowerCaseR === "Y" || lowerCaseR === "") {
    superArray = superArray.concat(lowerCase)
  // if user selects "N" OR clicks Cancel, then don't add anything to super Array
  } else if (lowerCaseR === "N" || lowerCaseR === null) {
  } else {
    alert("All of your selections were 'N'. we cannot create a password, if you don't make any selections. Stop trying to break my code 🧐")
  }
  
  if (symbolsR === "Y" || symbolsR === "") {
    superArray = superArray.concat(symbols)
  // if user selects "N" OR clicks Cancel, then don't add anything to super Array
  } else if (symbolsR === "N" || symbolsR === null) {
  } else {
    alert("All of your selections were 'N'. we cannot create a password, if you don't make any selections. Stop trying to break my code 🧐")
  }
  
  
  
  
  // / si u="Y" && lowe==Y and S==""
  // YYY
  // while (! ((symbolsR === "Y") || (symbolsR === "N")))
  // if (upperCaseR === "Y" && lowerCaseR === "Y" && symbolsR === "Y") {
  //   superArray = superArray.concat(upperCase).concat(lowerCase).concat(symbols)
  // //YNY
  // } else if (upperCaseR === "Y" && lowerCaseR === "N" && symbolsR === "Y") {
  //   superArray = superArray.concat(upperCase).concat(symbols)
  // //YNN
  // } else if (upperCaseR === "Y" && lowerCaseR === "N" && symbolsR === "N") {
  //   superArray = superArray.concat(upperCase)
  // //NYY
  // } else if (upperCaseR === "N" && lowerCaseR === "Y" && symbolsR === "Y") {
  //   superArray = superArray.concat(lowerCase).concat(symbols)
  // //NYN
  // } else if (upperCaseR === "N" && lowerCaseR === "Y" && symbolsR === "N") {
  //   superArray = superArray.concat(lowerCase)
  // //NNY
  // } else if (upperCaseR === "N" && lowerCaseR === "N" && symbolsR === "Y") {
  //   superArray = superArray.concat(symbols)
  // //NNN
  // } else {
  //   alert("All of your selections were 'N'. we cannot create a password, if you don't make any selections. Stop trying to break my code 🧐")
  // }
  
  
  // while symbolsR doesn't contain a string = "Y" OR "N" OR null then loops runs
  // while (! ( (symbolsR === "Y") || (symbolsR === "N") || (symbolsR === null) )) {
  // if user selects "Y" to upperCase or clicks "OK", then add uppercase array to superArray
  //   if (upperCaseR === "Y" || upperCaseR === "") {
  //     superArray = superArray.concat(upperCase)
  // // if user selects "N" OR clicks Cancel, then don't add anything to super Array
  //   } else if (upperCaseR === "N" || upperCaseR === null) {
  //     console.log(superArray)
  
  // // if user selects "Y" to lowerCase or clicks "OK", then add lowerCase array to superArray
  //   } else if (lowerCaseR === "Y" || lowerCaseR === "") {
  //     superArray = superArray.concat(lowerCase)
  // // if user selects "N" OR clicks Cancel, then don't add anything to super Array
  //   } else if (lowerCaseR === "N" || lowerCaseR === null) {
  //     console.log(superArray)
  
  // // if user selects "Y" to symbolsR or clicks "OK", then add symbolsR array to superArray
  //   } else if (symbolsR === "Y" || symbolsR === "") {
  //    superArray = superArray.concat(symbols)
  // // if user selects "N" OR clicks Cancel, then don't add anything to super Array
  //   } else if (symbolsR === "N" || symbolsR === null) {
  //     console.log(superArray)
  
  // // if user doesn't selects all "N" OR clicks Cancel for all prompts, then alert
  //   } else {
  //      alert("All of your selections were 'N'. we cannot create a password, if you don't make any selections. Stop trying to break my code 🧐")
  //   }
  // // }
  
  // // while symbolsR doesn't contain a string = "Y" OR "N" OR null then loops runs
  // while (! ( (symbolsR === "Y") || (symbolsR === "N") || (symbolsR === null) )) {
    // if user selects "Y" to upperCase or clicks "OK", then add uppercase array to superArray
  

// while (! ((superArray.length === CharactersR))) {
//   const shuffleArray = superArray => {
//     for (let i = superArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i+1));
//       const temp = superArray [i];
//       superArray[i] = superArray [j];
//       superArray[j] = temp;
//     }
//     return superArray;
//   };
// }

while (! ((superArray.length === CharactersR))){
    const shuffleArray = superArray => {
    const i = superArray.length 
        const j = Math.floor(Math.random() * (i+1));
        const temp = superArray [i];
        superArray[i] = superArray [j];
        superArray[j] = temp;
      i = i+1
      return superArray;
    };
  }
  
  
  // Randomizes the SuperArray to reduce the chances the function cutSuperArray slices the array equally every time 
  shuffleArray(superArray)
  
  
  // Once the supperArray has been built according to the user preferences, then we use the function cutSuperArray to slice it according to the input the user selected it
  cutSuperArray(CharactersR)