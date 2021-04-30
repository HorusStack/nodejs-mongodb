var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    console.log(req.url)
    var creds = q.username + ':' + q.password;
    console.log(q.username, q.password)

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Handling Favicon response
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    fs.writeFile('data', creds, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File Created successfully");
    });
    return res.end('Successfully stored username and password');
}, (err) => {
    //failure (cannot connect to api )
    console.log(err)
}).listen(8080, () => {

    console.log("Server started listening at port 8080")

})

