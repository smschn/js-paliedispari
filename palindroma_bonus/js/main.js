// create input to get the word
const userInput = prompt('Please, enter a word: ');
console.log('The chosen word is: ' + userInput);

// separate each individual letter of the word, creating an array
const userInputReversedSplitted = userInput.split('');
console.log(userInputReversedSplitted);
console.log(`An array containing every single letter of the word is created: ${userInputReversedSplitted}`);

// reverse the order of the letters of the word == reverse the order of each element of the newly created array
userInputReversedSplitted.reverse();
console.log(userInputReversedSplitted);
console.log(`The order of the array is reversed: ${userInputReversedSplitted}`);

// the individual letters are united to form a new word (the array does not exist anymore)
let userInputReversed = userInputReversedSplitted.join('');
console.log(userInputReversed);
console.log(`All the letters are united to form a new word: ${userInputReversed}`);

// create a variable to be flagged \ used inside the for loop in the function
let check;

// create a function that checks if the user-entered word is palindrome
function isPalindrome(functionParameter) {

    // create a for loop to compare the two words and to change the 'check' variable
    for (let i = 0; i < functionParameter.length; i++) {
        if (functionParameter[i] == userInputReversed[i]) {
            check = true;
        } else if (functionParameter[i] != userInputReversed[i]) {
            check = false;
            i = functionParameter.length;
        }
    }

    return check;
}

// create a variable to use the function with the 'userInput' argument instead of the 'functionParameter' parameter (which is used as a general rule to show how the function works)
const isUserInputPalindrome = isPalindrome(userInput);

// show the result using a conditional statement
if (check == true) {
    console.log(`The word ${userInput} is palindrome`);
} else {
    console.log(`The word ${userInput} is NOT palindrome`);
}