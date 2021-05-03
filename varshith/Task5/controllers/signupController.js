const fs = require('fs');
const Signup = async (req, res) => {
    const { name, password } = req.body;
    fs.writeFile('user.txt', name + ',' + password, (err) => {

        if (err) {
            console.log(err)
        }
        else {
            console.log('Username and password saved successfully');

        }
    })
    res.status(200).json({ 'message': 'Success' });
}
module.exports = { Signup }