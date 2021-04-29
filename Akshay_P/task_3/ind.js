function person(){
    var firstName = prompt("Your FirstName");
    var secondName = prompt("Your SecondName");
    function fullName() {
        setTimeout(()=>console.log(firstName+" "+secondName) ,5000);
        }
    fullName();
}
person();
