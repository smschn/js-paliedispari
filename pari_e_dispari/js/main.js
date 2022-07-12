/*

Request:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

// user choice
const userChoice = prompt('Choose: odd or even?');

// user input
const userNumber = parseInt(prompt('Please, choose a number between 1 and 5.'));

// check if the number chosen by the user is correct
if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {

    alert('Error: you must choose a number between 1 and 5. Page will be reloaded.');

    // reload page
    window.location.reload();

} else {

    // show in the console the user number
    console.log('The human number is: ' + userNumber);

    // create a function to generate a random number between 1 and 5
    function generateComputerNumber() {
        let randomNumber = Math.floor(Math.random() * 5 + 1);
        return randomNumber;
    }

    // create a variable to use the function && show the generated number in console
    const computerNumber = generateComputerNumber();
    console.log('The computer number is: ' + computerNumber);

    // create a variable to define the sum of the two numbers && show the sum in console
    const sum = userNumber + computerNumber;
    console.log('The sum of the two numbers is: ' + sum);

    // create a variable \ flag to check if the sum is an odd or even number (it will be used in the next function)
    let isSumEven;

    // create a function to check if the argument is odd or even
    function oddEvenFunction(parameter) {
        if (parameter % 2 == 0) {
            isSumEven = true;
        } else {
            isSumEven = false;
        }
        return isSumEven;
    }

    // create a variable to get the result from the oddEvenFunction function with the 'sum' argument
    const result = oddEvenFunction(sum);

    // check on 'result' if sum is even or odd
    if (result == true) {
        console.log('The sum of the two numbers is: even');
    } else if (result == false) {
        console.log('The sum of the two numbers is: odd');
    }

    // check the winner
    if ((userChoice == 'even' && result == true) || (userChoice == 'odd' && result == false)) {
        console.log('Human wins!');
    } else if ((userChoice == 'even' && result == false) || (userChoice == 'odd' && result == true)) {
        console.log('Computer wins!');
    }

}