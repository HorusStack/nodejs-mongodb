const express = require('express');
const router = require('./routes/router')
const app = express();

app.use(express.json()); //body parser
app.use(router);//creating obj called router

app.listen(9000, (err) => {
    if (!err) {
        console.log("Server started running at port 9000")
    }
    else {
        console.log(err)
    }
})
