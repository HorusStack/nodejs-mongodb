let firstName= prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");


//console.log(x);

function x(){
    let x= firstName+" "+lastName;
    setTimeout(function (){
        console.log(x);
    },5000);
}

x();