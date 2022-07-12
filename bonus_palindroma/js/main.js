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

// the individual letters are united to form a new word
let userInputReversed = userInputReversedSplitted.join('');
console.log(userInputReversed);
console.log(`All the letters are united to form a new word: ${userInputReversed}`);

// create a variable to be flagged \ used inside the for loop
let check;

// create a for loop to compare the two words
for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == userInputReversed[i]) {
        check = true;
    } else if (userInput[i] != userInputReversed[i]) {
        check = false;
        i = userInput.length;
    }
}

// show the result with a conditional statement
if (check == true) {
    console.log(`The word ${userInput} is palindrome`);
} else {
    console.log(`The word ${userInput} is NOT palindrome`);
}