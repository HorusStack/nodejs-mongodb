const fs = require('fs');
const Login = async(req,resp)=>{
    const {username,password} = req.body;
    const data = fs.readFileSync('user.txt','utf-8');
    const details = data.split(',');

    // console.log(username);  to check whether username and password is correct or not
    // console.log(password);

    if(username===details[0]){
        if(password===details[1]){
            return resp.status(200).json({'message':'Login Successful'});
        }
        else{
            return resp.status(400).json({'message':'Password did not match'});
        }
    }
    else{
        return resp.status(400).json({'message':'User not found'});
    }
}
module.exports={Login}