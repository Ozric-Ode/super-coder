const express = require('express')
const path = require('path')
const webpagesRouter = new express.Router()
const verifytoken = require('../Security/verifytoken-middleware.js')
const getRankListData = require('../utils/ranklist.js')
const dbFunction = require('../database/connectToDb.js')
const MySQLEvents = require('mysql-events');
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
webpagesRouter.get('/createblog', (req, res) => {
    res.sendFile('createblog.html', { root: path.join(__dirname, '../../Webpages') })
})

webpagesRouter.get('/readblog', (req, res) => {
    res.sendFile('readblog.html', { root: path.join(__dirname, '../../Webpages') })
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
})
// var mysqlEventWatcher = new MySQLEvents({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
// });

webpagesRouter.get('/ranklist/:testId', async (req, res) => {
    const Test_Id = req.params.testId;
    console.log(Test_Id)
    const ranklist = await getRankListData(Test_Id);
        let rankObj = []
        ranklist.forEach((rankItem) => {
            const rankObjItem = {
                rank: (rankItem.rank),
                score: (rankItem.item.Score),
                name: (rankItem.item.Student_Id),
            }
            rankObj.push(rankObjItem)
        })
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_test WHERE Test_Id = ?";
        const testRes = await pool.query(query, [Test_Id]);
        await dbFunction.disconnectFromDb(pool);
       if(!testRes||!testRes[0]||!testRes[0][0])
        return res.status(200).send('Test Not Found')
        
        const title = testRes[0][0].Title;
        const testCode = testRes[0][0].Test_Id;
        const courseCode = testRes[0][0].Course_Code;
        res.render("ranklist.hbs", {
            rankObj,
            title,
            testCode,
            courseCode
        })
   
})

webpagesRouter.get('/question', (req, res) => {

    res.sendFile('questionPage.html', { root: path.join(__dirname, '../../Webpages') })
})

webpagesRouter.get('/home', (req, res) => {

    res.sendFile('homepage.html', { root: path.join(__dirname, '../../Webpages') })
})


module.exports = webpagesRouter




 // mysqlEventWatcher.add("supercoder.ranklist", async (oldRow, newROw, event) => {
    //     const ranklist = await getRankListData(Test_Id);
    //     let rankObj = []
    //     ranklist.forEach((rankItem) => {
    //         const rankObjItem = {
    //             rank: (rankItem.rank),
    //             score: (rankItem.item.Score),
    //             name: (rankItem.item.Student_Id),
    //         }
    //         rankObj.push(rankObjItem)
    //     })
    //     const pool = await dbFunction.connectToDb();
    //     let query = "SELECT * FROM programming_test WHERE Test_Id = ?";
    //     const testRes = await pool.query(query, [Test_Id]);
    //     await dbFunction.disconnectFromDb(pool);
    //     if(!testRes||!testRes[0]||!testRes[0][0])
    //     return res.status(200).send('Test Not Found')
    //     const title = testRes[0][0].Title;
    //     const testCode = testRes[0][0].Test_Id;
    //     const courseCode = testRes[0][0].Course_Code;
    //     res.render("ranklist.hbs", {
    //         rankObj,
    //         title,
    //         testCode,
    //         courseCode
    //     })
    // })