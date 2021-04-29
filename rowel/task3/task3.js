const prompt = require('prompt-sync')();

let name = (function() {
    let fname = '';
    let lname = '';
    function getFirstName() {
        fname = prompt("Enter first name: ");
    }
    function getLastName() {
        lname = prompt("Enter last name: ");
    }
    return  {
        setName: function() {
            getFirstName();
            getLastName();
        },
        fullname: function() {
            setTimeout(() => {
                console.log(`Full name: ${fname} ${lname}`);
            }, 5000);
        }
    }
})();

name.setName();
name.fullname();