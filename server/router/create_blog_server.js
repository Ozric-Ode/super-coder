var mysql = require('mysql');
const express = require('express');
const { resolve } = require('path');
const { nextTick } = require('process');
const createblogRouter = new express.Router();
const dbFunction=require('../database/connectToDb.js')
class Blog {

    constructor(
        //Blog_Id,
        Content,
        blogDate,
        Upvotes,
        Title,
        Downvotes,
        Professor_Id,
        Student_Id,
        Problem_Id) {
     //   this.Blog_Id = Blog_Id;
        
        Date = blogDate;
        this.Title = Title;
        this.Upvotes = Upvotes;
       this.Content = Content;
        this.Downvotes = Downvotes;
        this.Professor_Id = Professor_Id;
        this.Student_Id = Student_Id;
        this.Problem_Id = Problem_Id;


    }
}
createblogRouter.post('/addblog', async(req, res) => {
    try {
        // ob = new Blog(
        //     ...req.body
        // );
        ob=req.body,
        console.log(ob);
       
        // async function forOf(){
        //     result.push( await
       //################################################
        //to test it ....to check sequential run of async functions...#######
//#########################################################
//         connection.query('select * from blog ', async(error, result) => {
//             ob.Blog_Id = await result.length + 1;
//             console.log("the blog_ID updated is"+ob.Blog_Id);
//             console.log(ob);
//          //  next();
//  //resolve(result[0].Blog_Id);

//         },);
       // result.push(await  );
       const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'supercoder',
    });
    connection.connect();
        // const pool=await dbFunction.connectToDb();
        // const query='Insert into blog SET ?';
        // const insertRes=await pool.query(query,[ob]);
        // console.log(insertRes);
        // await dbFunction.disconnectFromDb(pool);
         connection.query(
            'Insert into blog SET ?', ob, async(error, results) => {
                if (error) {
                    throw error
                }
                console.log("hrrrrrr");
            } 
        ) 
        
        connection.end();
    } catch (error) {
        console.log(error);
        const smsg={
            mssg:error,
        }
        res.status(400);
    }
})
module.exports = createblogRouter