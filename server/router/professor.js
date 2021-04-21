const express = require('express')
const getToken = require('../utils/sendcode')
const workOnToken = require('../utils/recieveSolution')
const professorRouter = new express.Router()
const dbFunction=require('../database/connectToDb.js')

professorRouter.post('/checktestid', async (req, res) => {

    try {
        console.log("req.body.Test_Id", req.body.Test_Id);
        var errorobj={errormsg:''};
        const pool=await dbFunction.connectToDb();
        const query='SELECT Test_Id FROM programming_test WHERE Test_Id=?';
        const testIdRes=await pool.query(query,[req.body.Test_Id]);
        console.log(testIdRes);
        if(!!testIdRes&&!!testIdRes[0]&&testIdRes[0].length>0)
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
        return res.status(200).send(JSON.stringify(obj));

    } catch (error) {
        const errorobj = {
            errormsg: error,
          }
          res.status(400).send(JSON.stringify(errorobj))
    }
})



module.exports = professorRouter

