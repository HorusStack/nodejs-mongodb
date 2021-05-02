var http = require('http');
var url = require('url')
var fs = require('fs')

http.createServer((req, res) => {
     if(req.url === '/favicon.ico') return;
    
      const q = url.parse(req.url, true).query;
      
      console.log(q.username);
      console.log(q.password);

      var Data = 'Username is '+q.username+'\nPassword is '+q.password;

      fs.writeFile('testfield', Data, (err) => {
        
        if (err){
             return res.end('error!! occured');
            }else
            {
        return res.end('username and password saved');
      }

    });

    },(err) => {

      console.log("eerror here");
    
    }).listen(8080, () => {
    
        console.log('Server started to listen at 8080');
 
    });