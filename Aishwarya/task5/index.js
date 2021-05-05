const express = require('express');
const app = express();
const router=require('./routes/router')

app.use(express.json());
app.use(router);



app.listen(8080,(err)=>{
    if(!err){
        console.log("Server started listerning at 8080")
    }else{
        console.log(err)
    }
})