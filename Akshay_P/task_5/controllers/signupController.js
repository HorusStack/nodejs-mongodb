const fs = require('fs');
const Signup = async(req,resp)=>{  //post request will have some body
  
    const {username,password} = req.body;
    fs.writeFile('user.txt',username+','+password,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Username and Password saved Successfully');
        }
    })

    
    console.log(req.body);
    resp.status(200).json({'message':'Signup Sussess'});
}

module.exports={Signup}