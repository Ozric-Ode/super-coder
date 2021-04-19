const express = require('express')
const path = require('path')
const webpagesRouter = new express.Router()
const verifytoken = require('../Security/verifytoken-middleware.js')

webpagesRouter.get('/', verifytoken.verifytokenStudent, (req, res) => {
    if (req.Student_Id)
        return res.redirect('/profile')
    // res.sendFile('login.html', { root: path.join(__dirname, '../../Webpages') })
    res.redirect('/login')
})

webpagesRouter.get('/ide', (req, res) => {
    //adding new ide screen. remove next line and uncomment the next text line
    res.sendFile('ideScreen.html', { root: path.join(__dirname, '../../Webpages') })

    // res.sendFile('ide.html', { root: path.join(__dirname, '../../Webpages') })
})
webpagesRouter.get('/login', verifytoken.verifytokenStudent, (req, res) => {
    if (req.Student_Id) {
        return res.redirect('/profile')
    }
    // return res.sendFile('profile.html', { root: path.join(__dirname, '../../Webpages') })


    res.sendFile('login.html', { root: path.join(__dirname, '../../Webpages') })
})
webpagesRouter.get('/register', verifytoken.verifytokenStudent, (req, res) => {
    if (req.Student_Id)
        return res.redirect('/profile')

    res.sendFile('register.html', { root: path.join(__dirname, '../../Webpages') })
})

webpagesRouter.get('/profile', verifytoken.verifytokenStudent, (req, res) => {
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

webpagesRouter.get('/login/professor', verifytoken.verifytokenProfessor, (req, res) => {
    if (req.Professor_Id) {
        return res.redirect('/profile/professor')
    }
    
    res.sendFile('professorLogin.html', { root: path.join(__dirname, '../../Webpages') })
})
webpagesRouter.get('/profile/professor', verifytoken.verifytokenStudent, (req, res) => {
    // if (req.Professor_Id)
        return res.sendFile('professorProfile.html', { root: path.join(__dirname, '../../Webpages') })

// webpagesRouter.get('/ranklist', (req, res) => {

//     res.sendFile('ranklist.html', { root: path.join(__dirname, '../../Webpages') })
// })
webpagesRouter.get('/ranklist', (req, res) => {

    res.render("ranklist.hbs")
})

webpagesRouter.get('/question', (req, res) => {

    res.sendFile('questionPage.html', { root: path.join(__dirname, '../../Webpages') })
})

webpagesRouter.get('/home', (req, res) => {

    res.sendFile('homepage.html', { root: path.join(__dirname, '../../Webpages') })
})


module.exports = webpagesRouter