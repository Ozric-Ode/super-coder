var mysql= require('mysql');
const express = require('express')
const path = require('path')
const signupRouter = new express.Router()



// signupRouter.post('/register',(req,res)=>{

// // console.log(req.body.username)
// res.sendStatus(200);

// })



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'supercoder',
});
connection.connect();
connection.query(
  'SELECT * FROM professor', (error, results) => {
    console.log(results)

    if (error) throw error;

  }
);
// const professor={Professor_Id:16953512,Contact_Number:null,Email:'madarchod@gasdfsd'}

// connection.query(
//   'insert into professor SET ?',professor, (error, results) => {
//     if (error) throw error;
// }
// );

connection.end();




// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'qwertyuiop@1',
//   database : 'supercoder',
// });

// connection.connect();

// connection.query('SELECT * FROM professor', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// connection.end();



module.exports = signupRouter