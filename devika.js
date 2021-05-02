var http=require('http')
var url=require('url')
var fs=require("fs")

//fs.writeFile('test','chinni,x,y',(err)=>{
  //  if(err){
    //    console.log(err)
    //}
    //console.log('good')
//})

http.createServer((req,res)=>{
    //sucess
    const data=fs.readFileSync('test2.txt','utf-8')
    const names=data.split(',')
    //console.log(names)
    const q=url.parse(req.url,true).query

    //console.log(q.name)
    //console.log(q.pwd)

    //console.log(req.url)
    res.writeHead(200,{
        'Content-Type':'text/html'
    })

    if(q.name==names[0]){  //testng if name in fole is prsnt in url
         res.write('LOGIN SUCCESSFUL:')
         return res.end(' WELCOME '+q.name)
    }
    else{
        return res.write('TRY AGAIN')
    }

    res.write('devika')
    res.end('hello')

},(err)=>{
    console.log(err)
}).listen(8080,()=>{
    console.log("success")
})