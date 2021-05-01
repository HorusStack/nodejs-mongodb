var http = require ('http');
var url = require('url');
var fs = require ('fs');

http.createServer((req,res) => {
    const q = url.parse(req.url,true).query
    res.writeHead(200,{
        'Content-type':'application/json'
    })

    const string = 'Username: ' + q.username + '\nPassword: ' + q.password;

    if(q.username && q.password) {
        fs.writeFile('login',string,(err) => {
            if(err) {
                return res.end(err);
            }
            return res.end("File created successfully!")
        });
    }

},(err) => {
    console.log(err)
}).listen(8080,() => {
    console.log("Started listening on port 8080")
});