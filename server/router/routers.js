const express = require('express')
const {getToken, getTokenForSubmit} = require('../utils/sendcode')
const workOnToken = require('../utils/recieveSolution')
const getTestCase = require('../utils/getTestCase')
const submitRouter = new express.Router()
const dbFunction=require('../database/connectToDb.js')
var base64 = require('base-64');
const verifytoken = require('../Security/verifytoken-middleware.js')
const { getProblemsFromTestId, getProblemsNotInTest,getProblem, checkIfProblemExists } = require('../utils/fetchProblems.js')
const insertIntoRanklist= require('../utils/addToRankListAndAttempts.js')
submitRouter.post('/submit', async (req, res) => {
    
    try {
        const obj = {
            code: req.body.code,
            stdin: req.body.stdin,
            language_id: req.body.language_id,
        }
        console.log(obj)
        const token = await getToken(obj)
        console.log(token.token)
        const finalSolution = await workOnToken(token)
        console.log(finalSolution)
        return res.send(finalSolution)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})

submitRouter.post('/submitSolution/:problemId', verifytoken.verifytokenStudent, async (req, res) => {
    
    try {
        const problem = await getProblem(req.params.problemId)
        const testCase=await getTestCase(req.params.problemId)
        // console.log(testCase);
        console.log('*****************************',testCase.Output);
        const Base64Input=base64.encode(testCase.Input)
        const Base64Output=base64.encode(testCase.Output)
        // console.log(Base64Input);
        // console.log(Base64Output);
        console.log(req.params.problemId)
        const obj = {
            code: req.body.code,
            stdin: Base64Input ,
            language_id: req.body.language_id,
            expected_output: Base64Output
        }
        console.log(obj) 
        const token = await getTokenForSubmit(obj)
        // console.log(token.token)
        const finalSolution = await workOnToken(token)
        // console.log(finalSolution)
        // const obj23= JSON.parse(finalSolution);
        // console.log(obj23)
        // if(finalSolution.status.id==3)
        // {
        //     insertIntoRanklist(problem[0].Test_Id,req.Student_Id)
        // }
        // else
        // if(finalSolution.status.id==4)
        // {
        //     console.log("wrong answer")
        // }

        return res.status(200).send(finalSolution)
        // const obj2={
        //     msg:'Hello There'
        // }
        // return res.status(200).send(obj2);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})

submitRouter.patch('/updatestudent', async (req, res) => {
    try {
        const student = {
            ...req.body
        }
        const Student_Id = student.Student_Id;
        delete student.Student_Id;
        console.log(student)
        const pool=await dbFunction.connectToDb();
        const [rows,fields]=await pool.query('update student SET ? where student_id=?', [student, Student_Id]);
        await dbFunction.disconnectFromDb(pool);
        return res.sendStatus(200)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})
submitRouter.post('/addToAttempt', async (req, res) => {
    
    try {
        const obj = {
            ...req.body
        }
        console.log(obj);
        await insertIntoRanklist(obj.Test_Id,obj.Student_Id)

        return res.status(200).send()
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})
module.exports = submitRouter

// work on token using callback
// workOnToken(token, (error, finalSolution) => {
//         if (error) {
//             throw new Error(error)
//         }
//         console.log(finalSolution)
//         res.send(finalSolution)
//     })
// get token using callback 
// getToken(obj, (error, body = {}) => {

//     if (error) {
//         return res.status(400).send(error)
//     }
//     console.log(body)
//     workOnToken(body, (error, finalSolution) => {
//         if (error) {
//             return res.status(401).send(error)
//         }
//         res.send(finalSolution)
//     })

// })


// submitRouter.post('/submit/token', async (req, res) => {
//     const token = req.body.token
//     console.log('chutiya ',token)






// })


// var id=1
//    var description

// id=finalSolution.status.id
// description=finalSolution.status.description
// soln=finalSolution
//     if(description==='In Queue'||description==='Processing')
//   {  continue;
//   }
//     else
//     {
//         console.log('chutiya')
//     break;
//     }
// }


// console.log('5 seconds completed')
// workOnToken(token,(error,finalSolution)=>{
//     if(error)
//     {
//         return res.status(401).send(error)
//     }
//     res.send(finalSolution)
// })
//