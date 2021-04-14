var mysql=require('mysql');
const express=require('express');
const blogsRouter=new express.Router();


blogsRouter.post('/readblog',async(req,res)=>{
console.log("lllllllllkkkkkk");
var data=[];
try {
//////////////
const obj=await req.body;
const connection=mysql.createConnection({
      host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'supercoder',
});
console.log("all_set");
connection.connect();
console.log('afterrr'+obj.lt,obj.oft);
 connection.query('Select * from blog ORDER BY Blog_id LIMIT ? OFFSET ? ',[obj.lt,obj.oft-1],async (error,result)=>{
     try{
console.log( await result);
console.log("byeee");
      data = await result;
      ////////
       const objs={
             row:await result,
         }
         var obb=JSON.stringify(objs);
         console.log(obb);
         res.send(obb);
     }
     catch(e)
     {
         console.log(e);
     }
});
         
         //res.json(await JSON.parse(data));
         console.log('dataaaaa12222222222222222222'+data);
        // console.log( data);
        
        // console.log(await res.body);
         connection.end();
 } catch (err) {
  res.json({ error: err.message || err.toString() });
 }

});
///////////////

//console.log(data);

module.exports=blogsRouter
