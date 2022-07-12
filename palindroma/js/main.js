const userInput = prompt('Please, enter a word:');

//debug
console.log(userInput[0])
console.log(userInput[1])
console.log(userInput[2])
console.log(userInput[3])

let prova1;

const isWordPalindrome = test();

function test() {
    for(let i = 0; i < userInput.length; i++) {
        if (userInput[i] == userInput[userInput.length-i-1]) {
            prova1 = true;
            console.log(i); //debug
            console.log(userInput[i]); //debug
        } else if (userInput[i] != userInput[userInput.length-i]) {
            prova1 = false;
        }
        console.log(prova1);//debug
    }
    return prova1;
}

if (isWordPalindrome == true) {
    console.log('The chosen word is palindrome.');
} else if (isWordPalindrome == false) {
    console.log('The chosen word is NOT palindrome.');
}

console.log(userInput.length);