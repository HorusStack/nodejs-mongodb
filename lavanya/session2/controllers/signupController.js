const fs = require('fs');
const Signup = async(req,resp)=>{
    const {name,password} = req.body;
    fs.writeFile('user.txt',name+','+password,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Name and password saved successfully')
        }
    })
    resp.status(200).json({"message":"Success"})
}
module.exports={Signup}