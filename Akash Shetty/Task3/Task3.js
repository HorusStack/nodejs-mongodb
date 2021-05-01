function outer() {
  var firstName = prompt("Enter First Name");
  var lastName = prompt("Enter Last Name");
  function inner() {
    console.log(firstName + " " + lastName);
  }
  return inner;
}

setTimeout(outer(), 5000);
