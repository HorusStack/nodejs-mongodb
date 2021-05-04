const express = require('express');
const { router } = require('./routes/router');
const app = express();


app.use(express.json());
app.use(router);

// router.get('/',(req,resp)=>{
//     if(req.query.name===undefined)
//     resp.status(404).json({'message':'Failed'});
//     else
//     resp.status(200).json({'message':'Success'});
//     resp.send('Hi' +req.query.name)
// })

app.listen(9000,(err)=>{
    if(!err){
        console.log('Server started listening at 9000');
    }else{
        console.log(err)
    }
})