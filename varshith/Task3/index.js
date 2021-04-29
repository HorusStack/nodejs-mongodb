function myFunc() {

    function otherFunc() {
        setTimeout(function () {
            console.log(firstName + " " + lastName);
        }, 5000);
    }

    var firstName = prompt("Please enter First name");
    var lastName = prompt("Please enter Last name");
    otherFunc();

}
myFunc();