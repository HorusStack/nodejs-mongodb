const express = require('express');
const router = require('./routes/router');
const app = express();

app.use(express.json());
app.use(router);

app.listen(9000, (err)=>{
    if(!err){
        console.log('Server started at port at 9000');
    }
    else{
        console.log(err)
    }
})
