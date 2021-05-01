function x(){
    var firstName=window.prompt("Enter First Name")
    var LastName=window.prompt("Enter Last Name")
    function y(){
        console.log(firstName+" "+LastName)
    }
    return y
}
setTimeout(x(),5000)