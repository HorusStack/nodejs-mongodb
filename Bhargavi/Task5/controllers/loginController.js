const fs = require('fs');
const Login = async(req, resp)=>{
    const{name, password} = req.body
    const data = fs.readFileSync('user.txt', 'utf-8');
    const details = data.split(',')
    if(name === details[0]){
        if(password === details[1]){
            return resp.status(200).json({'message':'Login successful'});
        }
        else{
            return resp.status(400).json({'message':'Password is incorrect'});
        }
    }
    else{
        return resp.status(400).json({'message':'username is incorrect'})
    }
   
}
module.exports = {Login}