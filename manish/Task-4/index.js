const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req,res)=>{
    const {query,path} = url.parse(req.url,true);
    const {username,password} = query;
    
    if(path === '/')
        res.end("wellcome,pass username and password as params in GET request");
    else if(username !== undefined && password !== undefined){
        fs.access("./credentials",fs.constants.F_OK,(err)=>{
            if(err){
                fs.writeFile("credentials",`${username}\n${password}\n`,
                (err)=>{
                    if(err)
                        console.log(err);
                });
            }else{
                fs.appendFile("credentials",`${username}\n${password}\n`,
                (err)=>{
                    if(err)
                        console.log(err);
                });
            }
            res.end("successfully saved...");
        });
    }
    else{
        res.end("username or password is invalid or invalid URL");
    }
},(err)=>{

}).listen("8080","localhost",()=>{
    console.log("listning to port 8080");
})
