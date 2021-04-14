const express = require('express')
const path = require('path')
const webpagesRouter = new express.Router()
const verifytoken = require('../Security/verifytoken-middleware.js')

webpagesRouter.get('/', verifytoken, (req, res) => {
    if (req.Student_Id)
        return res.redirect('/profile')

    // res.sendFile('login.html', { root: path.join(__dirname, '../../Webpages') })
    res.redirect('/login')
})

webpagesRouter.get('/ide', (req, res) => {

    res.sendFile('ide.html', { root: path.join(__dirname, '../../Webpages') })
})
webpagesRouter.get('/login', verifytoken, (req, res) => {
    if (req.Student_Id) {
        return res.redirect('/profile')
    }
    // return res.sendFile('profile.html', { root: path.join(__dirname, '../../Webpages') })


    res.sendFile('login.html', { root: path.join(__dirname, '../../Webpages') })
})
webpagesRouter.get('/register', verifytoken, (req, res) => {
    if (req.Student_Id)
        return res.redirect('/profile')

    res.sendFile('register.html', { root: path.join(__dirname, '../../Webpages') })
})

webpagesRouter.get('/profile', verifytoken, (req, res) => {
    if (req.Student_Id)
        return res.sendFile('profile.html', { root: path.join(__dirname, '../../Webpages') })

    // res.sendFile('login.html', { root: path.join(__dirname, '../../Webpages') })
    res.redirect('/login')
})
webpagesRouter.get('/blogs', (req, res) => {
    res.sendFile('blog.html', { root: path.join(__dirname, '../../Webpages') })
})
webpagesRouter.get('/createblog',(req,res)=>{
    res.sendFile('createblog.html',{root:path.join(__dirname,'../../Webpages')})
})

webpagesRouter.get('/readblog',(req,res)=>{
    res.sendFile('readblog.html',{root:path.join(__dirname,'../../Webpages')})
})


module.exports = webpagesRouter