const fs = require('fs');
const Login = async (req, res) => {
    const { name, password } = req.body;
    const data = fs.readFileSync('user.txt', 'utf-8');
    const details = data.split(',');
    if (name === details[0]) {
        if (password === details[1]) {
            return res.status(200).json({ 'message': 'Login successful' });
        }
        else {
            return res.status(400).json({ 'message': 'Password didnt match' });
        }

    }
    else {
        return res.status(404).json({ 'message': 'User not found' });
    }
}
module.exports = { Login };