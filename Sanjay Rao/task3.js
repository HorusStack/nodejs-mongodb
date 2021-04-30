function name() {
    var firstName = prompt("Enter your first name")
    var lastName = prompt("Enter your last name")
    return firstName + " " + lastName;
}
var name = name()

// Timeout function to dely the output for 5s
setTimeout(() => {
    console.log(name)
}, 5000);
