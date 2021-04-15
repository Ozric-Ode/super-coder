require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser')
const publicDirPath = path.join(__dirname, '../../public')
const submitRouter = require('../router/routers')
const webpagesRouter = require('../router/webpages.js')
const signupRouter=require('../router/register_login.js')
const PORT = process.env.PORT
app.use(cookieParser())
app.use(express.json())
app.use(express.static(publicDirPath))
app.use(submitRouter)
app.use(webpagesRouter)
app.use(signupRouter)
    // app.get((req, res) => {
    //     res.status(404).sendFile('404page.html', { root: path.join(__dirname, '../../webpages') })
    // })
app.use(function(req, res, next) {
    res.status(404).sendFile('404page.html', { root: path.join(__dirname, '../../webpages') })
});
app.get('/*',()=>{
    res.status(404).sendFile('404page.html', { root: path.join(__dirname, '../../webpages') })
})

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})