var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {

    if(req.url == '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        console.log('favicon requested');
        return;
    }
    

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Enter username and password in the url after "=" symbol');
    res.write('<br>Syntax: http://localhost:8080/?username=&password=');
    const q = url.parse(req.url, true).query;
       
    let usernamePassword = q.username+ " " + q.password + "\n";

    //creating file
    if(usernamePassword !== undefined){
        fs.appendFile('../text/UsernamePassword.txt', usernamePassword, (err) => {
            if(err) throw err;
            console.log("Saved");
        });
        
    }
    
    res.end('<h3>Saved in file</h3>');
}).listen(8080, () => {
    console.log("Server started on port 8080");
});

