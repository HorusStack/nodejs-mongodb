var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer((req,res)=>{
    console.log("successful");
    
    
    //console.log(data);
    const q=url.parse(req.url,true).query;
    console.log("name is "+q.name+ "password is:"+q.password);
    fs.writeFileSync('test','name is:'+q.name+ ' password is:'+q.password,(err)=>{
        console.log(err);
    })
   
    res.writeHead(200,{
        'Content-Type':'application/json'
    })
    const data=fs.readFileSync('test','utf-8');
    res.write(data);
    res.end("");
    
    // if(names.includes(q.name)){
    //    res.write("sucessfully" +q.name);
    //   res.end("done");
    // }
    // else{
    //     res.write("insuccesssful");
    //     res.end("end");
    // }

},(err)=>{
    console.log(err);
}).listen(8080,()=>{
    console.log("running on 8080");
})