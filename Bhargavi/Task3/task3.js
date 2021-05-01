//command readline
const prompt = require ('prompt-sync')();
const firstName = prompt("Enter your first name : ")
const lastName = prompt("Enter your last name : ")
//closure
function getFirstName(fname){
    function concatName(lname){
      //setTimeout function
      setTimeout(() => {
        console.log( `The concatenated string is ${fname.concat(lname)}`)
      }, 5000); 

    }
    return concatName
}

let getName = getFirstName(firstName)
getName(lastName)