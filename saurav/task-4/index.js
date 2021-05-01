const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, resp) => {

    const q = url.parse(req.url, true).query;

    let record = "";
    if(Object.hasOwnProperty.call(q, 'name') && Object.hasOwnProperty.call(q, 'password')) 
        record = "Name: " + q.name + "\n" + "Password: " + q.password + "\n\n";

    fs.appendFile('records', record, (err) => {
        if(err)
            console.log("Error : " + err);
    })
    
    resp.writeHead(200, {
        'content-type' : 'text/html'
    })
    resp.write("<h2>User saved successfully!!</h2>");
    resp.end();
},
err => {
    //server failed
    console.log(err);
})
.listen(8080, () => {
    console.log("created server successfully at port 8080");
})