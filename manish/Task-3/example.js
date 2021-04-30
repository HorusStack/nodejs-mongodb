const prompt = require('prompt-sync')();

function example() {
  
    const firstName = prompt("enter your first name ");
    const secondName = prompt("enter your second name ");
    const name = firstName + secondName;

    setTimeout(()=>{
        console.log(name);
    },1000);
}

example();