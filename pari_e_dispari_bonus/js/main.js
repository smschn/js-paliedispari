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

    // show in the console the user choice
    console.log(`The human choice is: ${userChoice}`);

    // show in the console the user number
    console.log(`The human number is: ${userNumber}`);

    // create variables for the computer minimum and maximum numbers
    let computerMinNum = 1;
    let computerMaxNum = 5;

    // create function to generate a casual number between a maximum and a minimum
    function generateRandomNumber(numberMinimum, numberMaximum) {
        const randomNumberFunction = Math.floor(Math.random() * (numberMaximum - numberMinimum + 1) + numberMinimum);
        return randomNumberFunction;
    }

    // generate random number for the computer
    const computerRandomNumber = generateRandomNumber(computerMinNum, computerMaxNum);
    console.log(`The computer number is: ${computerRandomNumber}`);

    // create a variable to define the sum of the two numbers && show the sum in console
    const sum = userNumber + computerRandomNumber;
    console.log(`The sum of the two numbers is: ${sum}`);

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
    } else {
        console.log('The sum of the two numbers is: odd');
    }

    // check the winner
    if ((userChoice == 'even' && result == true) || (userChoice == 'odd' && result == false)) {
        console.log('Human wins!');
    } else {
        console.log('Computer wins!');
    }

}