var mysql = require('mysql');
const express = require('express');
const blogsRouter = new express.Router();
const dbFunction=require('../database/connectToDb.js');
const path=require('path');


  blogsRouter.get('/blog/:id',async (req,res)=>{
       try{
           console.log(111111111111111111111111111111111111111111111111111111111111111111111111+'ss'+req.params.id);
           const obj={
               id:parseInt(req.params.id)
           };
           const pool=await dbFunction.connectToDb();
           const query='Select * from blog where Blog_id = ? ';
           const blogans=await pool.query(query,[obj.id])
          
        
        //     const blogObj ={
        //        row:blogans[0][0]
        //    }
     
     
            const query2='Select * from blog_comments where Blog_Id = ?';
          const blogcomments=await pool.query(query2,[obj.id]);

          console.log("##@@@@@________"+JSON.stringify(blogcomments[0]));
//console.log("heyy##$$$$$$########"+JSON.stringify(blogcomments[0]));
           await dbFunction.disconnectFromDb(pool);
           if(!blogcomments||!blogcomments[0]||!blogcomments[0].length===0)
            return res.sendFile('404page.html',{root:path.join(__dirname,'../../Webpages')});
            
            let commentObjs=[];
            blogcomments[0].forEach(comment=>{
                const commentObj={
                    author:comment.Student_Id||comment.Professor_Id,
                    comments:comment.Comments,
                    // Blog_id:comment.Blo,
                };
                commentObjs.push(commentObj);
            })
            
console.log('1@@@@@@@'+JSON.stringify(commentObjs));
// console.log("///////////////////////////////////////////////////");
// console.log(obj.title+"{{{"+obj.author+"{{{"+obj.date);
// var title=obj.title;
// var authororiginal=obj.author;
// var date=obj.date;
//             res.render('blogindiv.hbs',{
//                 title,
//                 authororiginal,
//                 date,
//                 commentObjs
//             })
     //########################################################
        var asd=blogans[0][0];
           console.log("haaaaaaaaaaaaaaaa"+JSON.stringify(asd));
           if(!blogans|| !blogans[0] || blogans[0].length===0)
           return res.sendFile('404page.html',{root:path.join(__dirname,'../../Webpages')})
           
           
           
           
           res.render("blogindiv.hbs",{
           Content:blogans[0][0].Content,
         //  author:'abv',
           title:blogans[0][0].Title,
           date:blogans[0][0].Date,
            commentObjs
       })




       }
       catch(e){
           console.log(e);
       }

   })

// blogsRouter.post('/readblog/', async (req, res) => {
    blogsRouter.post('/blog/:id',async(req,res)=>{

      
            const obj={

                    ...req.body,
                    }
                    // console.log("rrrrrrrrrr#######"+JSON.stringify(obj.Blog_I));
                    const obj2={
                Blog_Id:obj.Blog_id,
  Comments:obj.Comments,
  Student_Id:obj.Student_Id,
  Professor_Id:obj.Professor_Id,
                    }
                    console.log("obj222222222===="+JSON.stringify(obj2));
                    try{
                          const pool=await dbFunction.connectToDb();
                          if(obj2.Comments){
           const query='Insert  into blog_comments SET ?';
           //##add here insert queryyy and then select * query then for each for inserting objs then 
          // render it in hbs ';
           const blogans=await pool.query(query,[obj2])
           console.log('!!!!!!!!!!!!!!!!'+blogans);

                          }
                          return res.status(200).send();
           //if(o bj.Blo)
   

                    }
                    catch(e)
                    {
                        console.log(e);
                    }

    })
 

    blogsRouter.get('/readblog/:lt/:oft', async (req, res) => {
        // const obj.=lt=req.params.lt;
        // const oft=req.params.oft;
    console.log("lllllllllkkkkkk");
    var data = [];
    try {
        const obj = { 
            lt:parseInt((req.params.lt)),
            oft:parseInt((req.params.oft))
        };
        const pool=await dbFunction.connectToDb();
        const query='Select * from blog ORDER BY Blog_id LIMIT ? OFFSET ? ';
        
        console.log("all_set");
        console.log('afterrr' + obj.lt, obj.oft);
        

        const blogRes=await pool.query(query,[obj.lt, obj.oft - 1]);
        await dbFunction.disconnectFromDb(pool);
        console.log("########"+blogRes[0][0]);
        const resObj = {
                        row:  blogRes
                    }
                    console.log('Hello00000000 ', resObj.row[0][0])

//  $Content.innerHTML=obj.Content;
//     $author.innerHTML=obj.Student_Id;
//     $title.innerHTML=obj.Title;
//     $ddate.innerHTML=obj.Date;
// if(!resobj)
// {

// }
// else
{
       res.render("blog.hbs",{
           Content:resObj.row[0][0].Content,
         //  author:'abv',
           title:resObj.row[0][0].Title,
           date:resObj.row[0][0].Date

       })

       res.render("allblogs.hbs",{
          Content1:resObj.row[0][0].Content,
         //  author:'abv',
           title1:resObj.row[0][0].Title,
           date1:resObj.row[0][0].Date,
           link1:'/blog/:id'
       })
}
      // return res.status(200).send(JSON.stringify(resObj));

    } catch (err) {
        res.json({ error: err.message || err.toString() });
    }

});


//console.log(data);

module.exports = blogsRouter
