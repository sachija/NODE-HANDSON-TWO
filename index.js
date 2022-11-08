const express=require("express")
const server=express()

server.get('/api/main',(res,req)=>{
res.send("hello this is pooja ")
})
server.listen(3000,()=>{
    console.log("server started");
})