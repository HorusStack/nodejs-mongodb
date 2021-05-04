const express= require('express');
const { Signup } = require('../controllers/signupController');
const { Login } = require('../controllers/loginController')
const router = express.Router();

router.get('/',(req,resp)=>{
    resp.status(200).json({'message':'success'});
})
 
router.post('/signup',Signup)
router.post('/login',Login)
module.exports = {router};