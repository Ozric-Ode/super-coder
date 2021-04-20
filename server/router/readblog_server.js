var mysql = require('mysql');
const express = require('express');
const blogsRouter = new express.Router();
const dbFunction=require('../database/connectToDb.js')

blogsRouter.post('/readblog', async (req, res) => {
    console.log("lllllllllkkkkkk");
    var data = [];
    try {
        const obj = { 
            ...req.body 
        };
        const pool=await dbFunction.connectToDb();
        const query='Select * from blog ORDER BY Blog_id LIMIT ? OFFSET ? ';
        
        console.log("all_set");
        console.log('afterrr' + obj.lt, obj.oft);
        

        const blogRes=await pool.query(query,[obj.lt, obj.oft - 1]);
        await dbFunction.disconnectFromDb(pool);
        const resObj = {
                        row:  blogRes
                    }
                    console.log('Hello ', resObj.row[0][0])
       return res.status(200).send(JSON.stringify(resObj));

    } catch (err) {
        res.json({ error: err.message || err.toString() });
    }

});


//console.log(data);

module.exports = blogsRouter
