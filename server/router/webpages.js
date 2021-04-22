const express = require('express')
const path = require('path')
const webpagesRouter = new express.Router()
const verifytoken = require('../Security/verifytoken-middleware.js')
const getRankListData = require('../utils/ranklist.js')
const getContestData = require('../utils/contestpage.js')
const getProblemData = require('../utils/problempage.js')
const getEditContestListData = require('../utils/editTestList')
const getMyProblemsData = require('../utils/editProblemList')
const dbFunction = require('../database/connectToDb.js')
const MySQLEvents = require('mysql-events');
const getCourses = require('../utils/getCourses')
const { getTest } = require('../utils/getTests.js');
const { getProblemsFromTestId, getProblemsNotInTest } = require('../utils/fetchProblems.js')
const moment = require('moment')
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
webpagesRouter.get('/profile/professor', verifytoken.verifytokenProfessor, (req, res) => {
    if (req.Professor_Id)
        return res.sendFile('professorProfile.html', { root: path.join(__dirname, '../../Webpages') })

    return res.redirect('/login/professor')
})

webpagesRouter.get('/ranklist/:testId', async(req, res) => {
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
    if (!testRes || !testRes[0] || !testRes[0][0])
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
webpagesRouter.get('/test/:testId', async(req, res) => {
    const Test_Id = req.params.testId;
    console.log(Test_Id)
        // res.sendFile('contestpage.html', { root: path.join(__dirname, '../../Webpages') })
        // res.render("contestpage.hbs")

    const contestPage = await getContestData(Test_Id);
    if (contestPage.length === 0) {
        return res.status(404).sendFile('404page.html', { root: path.join(__dirname, '../../webpages') })
    }
    const Title = contestPage[0].Title;
    const Course_Code = contestPage[0].Course_Code;
    const Date = contestPage[0].Date;
    const Start_Time = contestPage[0].Start_Time;
    const End_Time = contestPage[0].End_Time;
    console.log(Start_Time)
    console.log(End_Time)

    let probObj = []
    const pool = await dbFunction.connectToDb();
    let query = "select * from programming_problem where Test_Id = ?";
    const testProblemRes = await pool.query(query, [Test_Id]);
    const problemList = testProblemRes[0];
    console.log(problemList)
    await dbFunction.disconnectFromDb(pool);
    res.render("testPage.hbs", {
        Title,
        Course_Code,
        Date,
        Start_Time,
        End_Time,
        problemList,
        Test_Id
    })


})

webpagesRouter.get('/problem/:problemId', async(req, res) => {
    const Problem_Id = req.params.problemId;
    console.log(Problem_Id)
    const problemPage = await getProblemData(Problem_Id);
    console.log(problemPage)
    if (problemPage.length === 0) {
        return res.status(404).sendFile('404page.html', { root: path.join(__dirname, '../../webpages') })
    }
    const Title = problemPage[0].Title;
    const Problem_Statement = problemPage[0].Problem_Statement;
    const Time_Limit = problemPage[0].Time_Limit;

    const Professor_Id = problemPage[0].Professor_Id;
    const Test_id = problemPage[0].Test_id;

    res.render("problemPage.hbs", {
        Title,
        Problem_Statement,
        Professor_Id,
        Problem_Id,
        Time_Limit,
        Test_id
    })


})

webpagesRouter.get('/edittestlist', verifytoken.verifytokenProfessor, async(req, res) => {
    console.log(req.Professor_Id)
    if (!req.Professor_Id) {
        res.redirect('/login/professor')
    }
    // res.sendFile('createContest.html', { root: path.join(__dirname, '../../Webpages') })
    const contestList = await getEditContestListData();


    res.render('editTestList.hbs', {
        contestList
    })
})

webpagesRouter.get('/myproblems', verifytoken.verifytokenProfessor, async(req, res) => {
    console.log(req.Professor_Id)
    if (!req.Professor_Id) {
        res.redirect('/login/professor')
    }
    // res.sendFile('createContest.html', { root: path.join(__dirname, '../../Webpages') })
    const problemList = await getMyProblemsData(req.Professor_Id);


    res.render('editProblemList.hbs', {
        problemList
    })
})

webpagesRouter.get('/problems', (req, res) => {

    res.sendFile('problemPage.html', { root: path.join(__dirname, '../../Webpages') })
})


webpagesRouter.get('/addproblem', verifytoken.verifytokenProfessor, (req, res) => {
    console.log(req.Professor_Id)
    if (!req.Professor_Id) {
        res.redirect('/login/professor')
    }
    res.render('addProblem.hbs')
})


webpagesRouter.get('/addtest', verifytoken.verifytokenProfessor, async(req, res) => {
    console.log(req.Professor_Id)
    if (!req.Professor_Id) {
        res.redirect('/login/professor')
    }
    // res.sendFile('createContest.html', { root: path.join(__dirname, '../../Webpages') })
    const problems = await getProblemsNotInTest(req.Professor_Id);
    const courses = await getCourses();
    res.render('addTest.hbs', {
        problems,
        courses,
    })
})
webpagesRouter.get('/editproblem/:problemId', verifytoken.verifytokenProfessor, (req, res) => {
    console.log(req.Professor_Id)
    if (!req.Professor_Id) {
        res.redirect('/login/professor')
    }
    res.render('editProblem.hbs')
})


webpagesRouter.get('/edittest/:testId', verifytoken.verifytokenProfessor, async(req, res) => {
    console.log(req.Professor_Id)
    if (!req.Professor_Id) {
        res.redirect('/login/professor')
    }
    // res.sendFile('createContest.html', { root: path.join(__dirname, '../../Webpages') })
    const problems = await getProblemsNotInTest(req.Professor_Id);
    const courses = await getCourses();
    const testRes = await getTest(req.params.testId)
    const testProblems = await getProblemsFromTestId(req.params.testId);
    testProblems.forEach((problem) => {
        if (problem.Professor_Id !== req.Professor_Id) {
            problem.Course_Code += ' -1';
        } else {
            problem.Course_Code += ' 0';
        }
    })
    const test = {
        ...testRes[0]
    }
    console.log('test date', moment(test.Date).format('yyyy-MM-DD'))
    const finalCourses = courses.filter(course => course.Course_Code !== test.Course_Code)
    res.render('editTest.hbs', {
        problems,
        finalCourses,
        testProblems,
        date: moment(test.Date).format('yyyy-MM-DD'),
        title: test.Title,
        testId: test.Test_Id,
        Start_Time: test.Start_Time,
        End_Time: test.End_Time
    })
})

webpagesRouter.get('/addcourse', verifytoken.verifytokenProfessor, async(req, res) => {
    if (!req.Professor_Id) {
        res.redirect('/login/professor')
    }
    const courses = await getCourses();
    res.render('addCourse.hbs', {
        courses
    });
})



webpagesRouter.get('/problems', (req, res) => {

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