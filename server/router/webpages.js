const express = require('express')
const path = require('path')
const webpagesRouter = new express.Router()
const verifytoken = require('../Security/verifytoken-middleware.js')
const getRankListData = require('../utils/ranklist.js')
<<<<<<< HEAD
const getContestData = require('../utils/contestpage.js')
=======
>>>>>>> ca70d5586f3d1e9977e4adee77268c758b6bde69
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

webpagesRouter.get('/createcourse',(req,res)=>{
    res.sendFile('createCourse.html',{root:path.join(__dirname,'../../Webpages')})
})

webpagesRouter.get('/login/professor', verifytoken.verifytokenProfessor, (req, res) => {
    if (req.Professor_Id) {
        return res.redirect('/profile/professor')
    }

    res.sendFile('professorLogin.html', { root: path.join(__dirname, '../../Webpages') })
})
webpagesRouter.get('/profile/professor', verifytoken.verifytokenStudent, (req, res) => {
<<<<<<< HEAD
        // if (req.Professor_Id)
        return res.sendFile('professorProfile.html', { root: path.join(__dirname, '../../Webpages') })

        // webpagesRouter.get('/ranklist', (req, res) => {

        //     res.sendFile('ranklist.html', { root: path.join(__dirname, '../../Webpages') })
    })
    // var mysqlEventWatcher = new MySQLEvents({
    //   host: "localhost",
    //   user: "root",
    //   password: "monik",
    // });
    // mysqlEventWatcher.add(
    //   "test.fortest",
    //   function (oldRow, newROw, event) {
    //     //   if(oldRow==null){
    //     // 	  console.log("old row null")
    //     // 	  var reslt1=oldRow;
    //     // 	  var reslt2=newROw;
    //     // 	  console.log(event);
    //     // 	  console.log(oldRow);
    //     // 	  console.log(newROw);
    //     // 	  console.log(newROw["fields"]["name"]);
    //     // 	  console.log(newROw["fields"]["id"]);
    //     // 	}
    //     // 	if(newROw==null){
    //     // 		console.log("new row deleted");
    //     // 	}

//     // 	if (oldRow !== null && newROw !== null) {
//     // 		var reslt1=oldRow;
//     // 	  var reslt2=newROw;
//     // 	  console.log(oldRow);
//     // 	  console.log(newROw["changedColumns"]);
//     // 	console.log("updation")
//     //   }
//     getData();
//   },
//   "testing"
webpagesRouter.get('/ranklist/:testId', async(req, res) => {
    const Test_Id = req.params.testId;
    console.log(Test_Id)
    const ranklist = await getRankListData(Test_Id);
    // const rank=[...ranklist]
    // console.log(rank)
    let rank = [];
    let score = [];
    let name = [];
    let rankObj = []
    ranklist.forEach((rankItem) => {
=======
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
>>>>>>> ca70d5586f3d1e9977e4adee77268c758b6bde69
            const rankObjItem = {
                rank: (rankItem.rank),
                score: (rankItem.item.Score),
                name: (rankItem.item.Student_Id),
            }
            rankObj.push(rankObjItem)
        })
<<<<<<< HEAD
        // console.log(rank)
        // console.log(score)
        // console.log(name)

    const pool = await dbFunction.connectToDb();
    let query = "SELECT * FROM programming_test WHERE Test_Id = ?";
    const testRes = await pool.query(query, [Test_Id]);
    await dbFunction.disconnectFromDb(pool);
    const title = testRes[0][0].Title;
    const testCode = testRes[0][0].Test_Id;
    const courseCode = testRes[0][0].Course_Code;
    res.render("ranklist.hbs", {
        rankObj,
        title,
        testCode,
        courseCode
    })
=======
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
   
>>>>>>> ca70d5586f3d1e9977e4adee77268c758b6bde69
})

webpagesRouter.get('/contest/:testId', async(req, res) => {
    const Test_Id = req.params.testId;
    console.log(Test_Id)
    const contestPage = await getContestData(Test_Id);
    const Title = contestPage[0].Title;
    const Course_Code = contestPage[0].Course_Code;
    const Date = contestPage[0].Date;
    const Start_Time = contestPage[0].Start_Time;
    const End_Time = contestPage[0].End_Time;

    let probObj = []

    const pool = await dbFunction.connectToDb();
    let query = "select * from programming_problem where Test_Id = ?";
    const testProblemRes = await pool.query(query, [Test_Id]);
    const problemList = testProblemRes[0];
    console.log(problemList)
    await dbFunction.disconnectFromDb(pool);

    res.render("contestpage.hbs", {
        Title,
        Course_Code,
        Date,
        Start_Time,
        End_Time,
        problemList
    })

})

webpagesRouter.get('/question', (req, res) => {

    res.sendFile('questionPage.html', { root: path.join(__dirname, '../../Webpages') })
})


webpagesRouter.get('/createQues', (req, res) => {

    res.sendFile('createQues.html', { root: path.join(__dirname, '../../Webpages') })
})


webpagesRouter.get('/createContest', (req, res) => {

    res.sendFile('createContest.html', { root: path.join(__dirname, '../../Webpages') })
})


webpagesRouter.get('/contests', (req, res) => {

    res.sendFile('contestPages.html', { root: path.join(__dirname, '../../Webpages') })
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