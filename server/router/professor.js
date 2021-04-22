const express = require('express')
const professorRouter = new express.Router()
const dbFunction=require('../database/connectToDb.js')


professorRouter.post('/checkproblemid', async (req, res) => {

    try {
        console.log("req.body.Problem_Id", req.body.Problem_Id);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query='SELECT Problem_Id FROM programming_problem WHERE Problem_Id=?';
        const problemIdRes=await pool.query(query,[req.body.Problem_Id]);
        console.log(problemIdRes);
        if(!!problemIdRes&&!!problemIdRes[0]&&problemIdRes[0].length>0)
        {    await dbFunction.disconnectFromDb(pool);
            errorobj.errormsg='Problem Id Already Exists';
            return res.status(400).send(JSON.stringify(errorobj));
        }
        const obj={
            msg:'Congratulations Problem Id available'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          return res.status(400).send(JSON.stringify(errorobj))
    }
})
professorRouter.post('/checktestid', async (req, res) => {
    try {
        console.log("req.body.Test_Id", req.body.Test_Id);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query='SELECT Test_Id FROM programming_test WHERE Test_Id=?';
        const problemIdRes=await pool.query(query,[req.body.Test_Id]);
        console.log(problemIdRes);
        if(!!problemIdRes&&!!problemIdRes[0]&&problemIdRes[0].length>0)
        {    await dbFunction.disconnectFromDb(pool);
            errorobj.errormsg='Test Id Already Exists';
            return res.status(400).send(JSON.stringify(errorobj));
        }
        const obj={
            msg:'Congratulations Test Id available'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          return res.status(400).send(JSON.stringify(errorobj))
    }
})
professorRouter.post('/editprogrammingproblem', async (req, res) => {
    console.log()
    try {
        const programming_problem={
            ...req.body
        }
        const test_case_file={
            Problem_Id:programming_problem.Problem_Id,
            Input:programming_problem.Input,
            Output:programming_problem.Output
        }
        delete programming_problem.Input;
        delete programming_problem.Output
        console.log(programming_problem);
        console.log(test_case_file);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query1='UPDATE programming_problem SET ? WHERE Problem_Id = ?';
        const query2='UPDATE test_case_file SET ? WHERE Problem_Id = ?';
        const insertProblemRes=await pool.query(query1,[programming_problem,programming_problem.Problem_Id]);
        const insertTestCaseFileRes=await pool.query(query2,[test_case_file,programming_problem.Problem_Id]);
        console.log(insertProblemRes);
        console.log(insertTestCaseFileRes);
        const obj={
            msg:'Congratulations Test Saved Succesfully'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        console.log(error)
        const errorobj = {
            errormsg: error,
          }
          res.status(400).send(JSON.stringify(errorobj))
    }
})
professorRouter.post('/addprogrammingproblem', async (req, res) => {

    try {
        const programming_problem={
            ...req.body
        }
        const test_case_file={
            Problem_Id:programming_problem.Problem_Id,
            Input:programming_problem.Input,
            Output:programming_problem.Output
        }
        delete programming_problem.Input;
        delete programming_problem.Output
        // console.log(programming_problem);
        // console.log(test_case_file);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query1='INSERT INTO programming_problem SET ?';
        const query2='INSERT INTO test_case_file SET ?';
        const insertProblemRes=await pool.query(query1,[programming_problem]);
        const insertTestCaseFileRes=await pool.query(query2,[test_case_file]);
        console.log(insertProblemRes);
        console.log(insertTestCaseFileRes);
        const obj={
            msg:'Congratulations Test Saved Succesfully'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          res.status(400).send(JSON.stringify(errorobj))
    }
})
professorRouter.post('/addprogrammingtest', async (req, res) => {

    try {
        const programming_test={
            ...req.body
        }
        const programming_problem=programming_test.ProblemsAdded;
        delete programming_test.ProblemsAdded;
        console.log(programming_problem);
        console.log(programming_test);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query1='INSERT INTO programming_test SET ?';
        const query2='UPDATE programming_problem SET Test_id = ? WHERE Problem_Id = ?';
        const insertTestRes=await pool.query(query1,[programming_test]);
        console.log(insertTestRes);
        for(let i=0;i<programming_problem.length;i++)
        {
            const changeProgrammingProblemTestRes=await pool.query(query2,[programming_test.Test_Id,programming_problem[i]]);
            console.log(changeProgrammingProblemTestRes);
        }
        const obj={
            msg:'Congratulations Test Saved Succesfully'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          res.status(400).send(JSON.stringify(errorobj))
    }
})

professorRouter.post('/editprogrammingtest', async (req, res) => {

    try {
        const programming_test={
            ...req.body
        }
        const programming_problem=programming_test.ProblemsAdded;
        delete programming_test.ProblemsAdded;
        console.log(programming_problem);
        console.log(programming_test);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query1='INSERT INTO programming_test SET ?';
        const query2='UPDATE programming_problem SET Test_id = ? WHERE Problem_Id = ?';
        const insertTestRes=await pool.query(query1,[programming_test]);
        console.log(insertTestRes);
        for(let i=0;i<programming_problem.length;i++)
        {
            const changeProgrammingProblemTestRes=await pool.query(query2,[programming_test.Test_Id,programming_problem[i]]);
            console.log(changeProgrammingProblemTestRes);
        }
        const obj={
            msg:'Congratulations Test Saved Succesfully'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          res.status(400).send(JSON.stringify(errorobj))
    }
})
professorRouter.post('/editprogrammingtest', async (req, res) => {
    try {
        const programming_test={
            ...req.body
        }
        const programming_problem=programming_test.ProblemsAdded;
        delete programming_test.ProblemsAdded;
        console.log('**********************')
        console.log(programming_problem);
        console.log(programming_test);
        console.log('**********************')
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query1='UPDATE programming_test SET ? WHERE Test_Id = ?';
        const query2='UPDATE programming_problem SET Test_id = ? WHERE Problem_Id = ?';
        const insertTestRes=await pool.query(query1,[programming_test,programming_test.Test_Id]);
        console.log(insertTestRes);
        for(let i=0;i<programming_problem.length;i++)
        {
            const changeProgrammingProblemTestRes=await pool.query(query2,[programming_test.Test_Id,programming_problem[i]]);
            console.log(changeProgrammingProblemTestRes);
        }
        const obj={
            msg:'Congratulations Test Saved Succesfully'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          res.status(400).send(JSON.stringify(errorobj))
    }
})

professorRouter.post('/addcourse', async (req, res) => {
    try {
        const course={
            ...req.body
        }
        console.log(course);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query1='INSERT INTO course SET ?';
        const insertTestRes=await pool.query(query1,[course]);
        console.log(insertTestRes);
       
        const obj={
            msg:'Congratulations Course Saved Succesfully'
        }
        await dbFunction.disconnectFromDb(pool);
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          return res.status(400).send(JSON.stringify(errorobj))
    }
})



module.exports = professorRouter

