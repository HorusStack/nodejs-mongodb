var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer((req,resp)=>{

    const q=url.parse(req.url,true).query;

    fs.writeFileSync('test','The Name "'+q.name+ '" & the Password #'+q.password+" is saved Successfully!",(err)=>{
        console.log(err);
    })

    resp.writeHead(200,{
        'Content-Type':'application/json'
    })
    const data=fs.readFileSync('test','utf-8');
    resp.write(data);
    resp.end("\n Thank You!!");

},(err)=>{
    //Failure
    console.log(err);
}).listen(8080,()=>{
    //Success
    console.log("Server started responding at port 8080");
}) 
