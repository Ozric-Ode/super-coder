const express = require('express');
const allblogsRouter = new express.Router();
const dbFunction=require('../database/connectToDb.js')
const path=require('path');

// allblogsRouter.
//limit == 4 ; 
allblogsRouter.get('/allblogs/:pg',async(req,res)=>{
    try{
        const obj={
            pg:parseInt(req.params.pg),//will start from 1.
            lt:4,
            oft:parseInt(4*(parseInt(req.params.pg)-1)),
        }
        const pool = await dbFunction.connectToDb();
        const query='Select * from blog ORDER BY Blog_id LIMIT ? OFFSET ? ';
        console.log('afterrr' + obj.lt, obj.oft);
        const blogRes=await pool.query(query,[obj.lt,obj.oft]);
         await dbFunction.disconnectFromDb(pool);

         
         if(!blogRes||!blogRes[0]||blogRes[0].length===0)
        //    return res.sendFile('404page.html',{root:path.join(__dirname,'../../Webpages')})
         return res.sendFile('404page.html',{root:path.join(__dirname,'../../Webpages')})

         let blogObjs=[];
         blogRes[0].forEach(blogItem=>{
             const blogItem0={
                 author:(blogItem.Professor_Id||blogItem.Student_Id),
                 Content:blogItem.Content,
                 date:blogItem.Date,
                 title:blogItem.Title,
                 upvotes:blogItem.Upvotes,
                 downvotes:blogItem.Downvotes,
                 link:'/blog/'+blogItem.Blog_id,
                 Problem_Id:blogItem.Proglem_Id,
             }
             
             blogObjs.push(blogItem0);


         })
         console.log(blogObjs);
         res.render("allblogs.hbs",{blogObjs,nextPage:obj.pg+1});
    }
    catch(e){
        console.log("the error is "+e);
    }
   
})
 

       module.exports=allblogsRouter
