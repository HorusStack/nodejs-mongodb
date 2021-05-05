const express = require('express');
const { Login } = require('../controllers/loginController')
const { Signup } = require('../controllers/signupController'); //automatically generated while writing Signup in '/signup' by the vscode
const router = express.Router();

router.get('/',(req,resp)=>{
    resp.status(200).json({'message':'SUCCESS'})
})

router.post('/signup',Signup)
router.post('/login',Login)

//basically below lines makes router object available to all other files present in this project
module.exports= router; //to export router object so that we can use in other 