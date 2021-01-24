const express=require('express')
const path=require('path')
const approute = require('../routing')
const app=express()
const publicDirPath=path.join(__dirname,'../../public')

const PORT=process.env.PORT


app.use(express.static(publicDirPath))
app.use(express.json())
app.use(approute)
// app.get("/",(req,res)=>{
// res.sendFile(publicDirPath+"/index.html");
// })
// app.get("/subm",(req,res)=>{
//     res.send("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
//     })


app.listen(3000,()=>{
    console.log(`app is running on ${3000}`)
})