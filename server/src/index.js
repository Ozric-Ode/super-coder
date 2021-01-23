const express=require('express')
const path=require('path')
const app=express()
const publicDirPath=path.join(__dirname,'../../public')
const submitRouter=require('../router/routers')
const PORT=process.env.PORT

app.use(express.json())
app.use(express.static(publicDirPath))
app.use(submitRouter)


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})