var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){

    var q = url.parse(req.url, true).query;
      
    fs.writeFile('user data',`username: ${q.username} and password: ${q.password}`,(err) => {
        if (err){
            return res.end('error has occured');
            }else{
        return res.end('username and password saving successful');
      }

    });

    },(err) => {
    console.log(err);
    
    }).listen(8080, () => {
    console.log('Server started to listen');
});