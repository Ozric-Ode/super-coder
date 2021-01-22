const express=require('express')
const path=require('path')
const app=express()
const publicDirPath=path.join(__dirname,'../../public')

const PORT=process.env.PORT


app.use(express.static(publicDirPath))




app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})