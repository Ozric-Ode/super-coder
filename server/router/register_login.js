var mysql = require('mysql');
const express = require('express')
const path = require('path')
const signupRouter = new express.Router()
const bcrypt = require('bcrypt')
const generateAuthToken = require('../Security/jwt');
const { errorMonitor } = require('events');
const jwt = require('jsonwebtoken')

signupRouter.post('/register', async (req, res) => {
  try {

    const student = {
      ...req.body
    }
    student.password = await bcrypt.hash(student.password, 8)
    console.log(student)

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'supercoder',
    });
    connection.connect();
    connection.query(
      'Insert into student SET ?', student, (error, results) => {
        if (error) {
          throw error
        };
      }
    );
    connection.end();
    const token = await generateAuthToken(student.Student_Id)
    console.log(token)
    const decoded = jwt.verify(token, 'sexysexysexysexyseyxy')
    console.log(decoded)
    res.cookie('authtoken', token, {
      httpOnly: true,
      maxAge: 1000000,
    })
    res.send().status(200)
  }
  catch (error) {
    console.log(error)
    res.send(400)
  }
})

const findUserAndVerifyCredentials = (Student_Id, password) => {
  console.log(Student_Id)
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'supercoder',
    });
    connection.connect();
    connection.query(
      'Select Student_id, password from student where Student_id = ?', [Student_Id], async (error, results) => {
        console.log(results)
        if (results.length === 0) {
          return reject('Student Not Found')
        }
        const verifyPassword = await bcrypt.compare(password, results[0].password)
        if (!verifyPassword) {
          return reject('Wrong Password')
        }
        resolve(results[0])
      })
    connection.end()
  })
}


signupRouter.post('/login', async (req, res) => {
  try {
    console.log(req.body.Student_Id)
    findUserAndVerifyCredentials(req.body.Student_Id, req.body.password).then(async (student) => {
      console.log(student)
      const token = await generateAuthToken(req.body.Student_Id)
      console.log(token)
      const decoded = jwt.verify(token, 'sexysexysexysexyseyxy')
        console.log(decoded)
      res.cookie('authtoken', token, {  
        httpOnly: true,
        maxAge: 1000000,
      })
      const obj = {
        ...req.body,
        token
      }
      return res.status(200).send(JSON.stringify(obj))
      // res.redirect('/login').send(JSON.stringify(obj))
    }).catch((error) => {
      console.log(error)
      const errorobj = {
        errormsg: error,
      }
      return res.status(400).send(JSON.stringify(errorobj))
    })

  } catch (error) {
    console.log(error)
    const errorobj = {
      errormsg: error,
    }
    res.status(400).send(JSON.stringify(errorobj))
  }
})
signupRouter.get


module.exports = signupRouter
// const professor={Professor_Id:16953512,Contact_Number:null,Email:'madarchod@gasdfsd'}

// connection.query(
//   'insert into professor SET ?',professor, (error, results) => {
//     if (error) throw error;
// }
// );





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



