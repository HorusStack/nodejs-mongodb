const fs = require('fs');

 const Signup = async(req,resp)=>{
    const {name,password} = req.body;
    fs.writeFile('user.txt',name+','+password,(err)=>{
       if(err){
        console.log(err)
       }
       else{
           console.log('username and password saved successfully');
       }
    })
    console.log(req.body.name);
    console.log(req.body.password);
    resp.status(200).json({'message':'success'});
}
module.exports={Signup}