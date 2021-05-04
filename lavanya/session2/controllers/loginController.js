const fs = require('fs')
const Login = async(req,resp)=>{
    const{name,password} = req.body;
    const data = fs.readFileSync('user.txt','utf8');
    const details = data.split(',')
    if(name===details[0]){
        if(password===details[1]){
            return resp.status(200).json({'message':'Login Successful'})
        }else{
            return resp.status(400).json({'message':'Password did not match'})
        }
    }else{
        return resp.status(404).json({'message':'User not found'})
    }
}
module.exports={Login}