const fs = require('fs')

const Signup = async(req,resp)=>{
    //await//MongoDB search for username & password
    const {name, password} = req.body;
    fs.writeFile('user.txt', name + ','+password, (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Username and password saved successfully")
        }
    })
    
    console.log(req.body.password);
    resp.status(200).json({"messsage":"success"});
}
module.exports = { Signup}