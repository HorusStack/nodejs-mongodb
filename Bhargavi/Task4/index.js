var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req,resp)=>{
    resp.writeHead(200,{
        'Content-Type':'text/html'
    })
  
const q = url.parse(req.url, true).query

fs.writeFile('userdata',`username: ${q.name}\npassword: ${q.password}`,(err)=>{
    if(err){
        resp.end('Unsuccessful try');
    }
    resp.write("Username and password added to the file successfully");
    })
},(err)=>{
    console.log(err)
}).listen(8080,()=>{
    console.log('Server started listening at port 8080')
})
