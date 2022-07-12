/*

Request:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

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
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        return randomNumber;
    }

    // create a variable to use the function && show the generated number in console
    const computerNumber = generateComputerNumber();
    console.log('The computer number is: ' + generateComputerNumber());

    // create a variable to define the sum of the two numbers && show the sum in console
    console.log(userNumber);
    console.log(computerNumber);

    const sum = userNumber + computerNumber;
    console.log('The sum of the two numbers is: ' + sum);

    // create a variable to check if the sum is an odd or even number (it will be used in the next function)
    let isSumOdd;

    // create a function to calculate 
    function oddEvenFunction(parametro) {
        if (parametro % 2 == 0) {
            isSumOdd = true;
        } else {
            isSumOdd = false;
        }
        return isSumOdd;
    }

    // lego variabile a funzione che uso sulla variabile sum
    const result = oddEvenFunction(sum);

    // condizione finale
    if (result == true) {
        console.log('il numero è pari')
    } else if (result == false) {
        console.log('il numero è dispari')
    }

}