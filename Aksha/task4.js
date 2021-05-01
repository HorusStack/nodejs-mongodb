var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer((req,resp)=>{
    const q=url.parse(req.url,true).query
    resp.writeHead(200,{
        'Content-Type':'application/json'
    })
    const data='Username: '+q.username+'\nPassword: '+q.password
    if(q.username&&q.password){
        fs.writeFile('task4',data,(err)=>{
            if(err){
             console.log(err)
            }
            console.log('File created successfully');
            return resp.end("File created successfully")
            })
           
         }
    else{
        return resp.end("File createion failed")
    }
}).listen(8080,()=>{
    console.log('Server started listening at 8080')
})
