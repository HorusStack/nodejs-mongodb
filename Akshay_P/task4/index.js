var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
      const q = url.parse(req.url, true).query;
      
      console.log(q.username);
      console.log(q.password);

      var fileData = 'Username is '+q.username+'\nPassword is '+q.password;

      fs.writeFile('testfile4', fileData, (err) => {
        
        if (err){
             return res.end('error!! occured');
            }else{
        return res.end('username and password saved to file testfile4');
      }

    });

    },(err) => {

      console.log(err);
    
    }).listen(8080, () => {
    
        console.log('Server started to listen at 8080');
 
    });