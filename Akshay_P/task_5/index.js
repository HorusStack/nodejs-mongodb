const express = require('express');  //express standard library
const router = require('./routes/router');
const app = express();    //this app is itself a server now i.e. creating server using express .HERE APP IS THE SERVER 

app.use(express.json());   //optional to use it called (BODY PARSER), if post request if body is coming in different 
                           //encoding to mange it we use this but better to be in safe side.USED TO SEND BODY 
app.use(router); //request

app.listen(9000,(err)=>{
    if(!err){
        console.log('Server started listeneing at 9000');
    }else{
        console.log(err);
    }
})
