/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

const userNumber = prompt('Please, choose a number between 1 and 5');

if (userNumber < 1 || userNumber > 5) {

    alert('Errore: devi inserire un numero tra 1 e 5. Ricarica la pagina.')

    
} else {

    const computerNumber = generateComputerNumber();

    // funzione per generare il numbero random per il pc
    function generateComputerNumber() {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        console.log(randomNumber + ' funzione');
        return randomNumber;
    }

    //debug
    console.log(computerNumber + ' fuori funzione');

    // somma
    const sum = parseInt(userNumber) + parseInt(computerNumber);
    console.log(sum + ' somma numeri');

    let isSumOdd;

    // funzione pari o dispari
    function oddEvenFunction(prova11) {
        if (prova11 % 2 == 0) {
            isSumOdd = true;
        } else {
            isSumOdd = false;
        }
        return isSumOdd;
    }

    // lego variabile a funzione che uso sulla variabile sum
    let result = oddEvenFunction(sum);

    // condizione finale
    if (result == true) {
        console.log('il numero è pari')
    } else if (result == false) {
        console.log('il numero è dispari')
    }

}