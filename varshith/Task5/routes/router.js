const express = require('express');
const { Login } = require('../controllers/loginController');
const { Signup } = require('../controllers/signupController');

const router = express.Router();

router.get('/', (req, res) => {

    res.status(200).json({ 'message': 'Success' });
})

router.post('/signup', Signup);

router.post('/login', Login);

module.exports = router;

