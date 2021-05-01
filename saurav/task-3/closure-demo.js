const prompt = require('prompt-sync')();

function concatInput() {

    const firstName = prompt("Enter the first name: ");
    const lastName = prompt("Enter the last name : ");

    setTimeout(() => {
        const fullName = firstName + " " + lastName;
        console.log(fullName);
    }, 5000);
}

concatInput();