const express = require('express')
const path = require('path')
const webpagesRouter = new express.Router()
const verifytoken = require('../Security/verifytoken-middleware.js')
const getRankListData=require('../utils/ranklist.js')
const dbFunction = require('../database/connectToDb.js')
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
webpagesRouter.get('/ranklist/:testId',async  (req, res) => {
    const Test_Id=req.params.testId;
    console.log(Test_Id)
    const ranklist=await getRankListData(Test_Id);
    // const rank=[...ranklist]
    // console.log(rank)
    let rank=[];
    let score=[];
    let name=[];
    let rankObj=[]
    ranklist.forEach((rankItem)=>{
        const rankObjItem={
        rank:(rankItem.rank),
        score:(rankItem.item.Score),
        name:(rankItem.item.Student_Id),
        }
        rankObj.push(rankObjItem)
    })
    // console.log(rank)
    // console.log(score)
    // console.log(name)
   
    const pool = await dbFunction.connectToDb();
    let query = "SELECT * FROM programming_test WHERE Test_Id = ?";
    const testRes = await pool.query(query,[Test_Id]);
    await dbFunction.disconnectFromDb(pool);
    const title=testRes[0][0].Title;
    const testCode=testRes[0][0].Test_Id;
    const courseCode=testRes[0][0].Course_Code;
    res.render("ranklist.hbs",{
        rankObj,
        title,
        testCode,
        courseCode
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