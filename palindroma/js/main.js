/*

Request:

Palindroma

Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.

*/

// create input to get the word
const userInput = prompt('Please, enter a word: ');
console.log('The chosen word is: ' + userInput);

// create a variable to be used as a flag - assigned 'true' because of how the for loop is created
let check = true;

// create a variable to use the function with our argument userInput
const isWordPalindrome = isPalindrome(userInput);

// create a function that checks if the word is palindrome and changes the flag if the condition is met
function isPalindrome(argument) {
    for (let i = 0; i < argument.length; i++) {
        if (argument[i] != argument[argument.length-i-1]) {
            check = false;
            i = argument.length; // to exit the for loop since the word will not be palindrome
        }
    }
    return check;
}

// check the flag value (true or false) and returns the corresponding message
if (isWordPalindrome == true) {
    console.log('The chosen word is palindrome.');
} else if (isWordPalindrome == false) {
    console.log('The chosen word is NOT palindrome.');
}



/*

--- Metodo 2. per la funzione:

let check;

const isWordPalindrome = isPalindrome(userInput);

function isPalindrome(argument) {

    for (let i = 0; i < argument.length; i++) {

        if (argument[i] == argument[argument.length-i-1]) {

            check = true;

        } else if (userInput[i] != userInput[userInput.length-i-1]) {

            check = false;
            i = argument.length; // to exit the for loop (the word will not be palindrome)

        }

    }

    return check;

}

if (isWordPalindrome == true) {

    console.log('The chosen word is palindrome.');

} else if (isWordPalindrome == false) {

    console.log('The chosen word is NOT palindrome.');

}

*/