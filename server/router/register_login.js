var mysql = require('mysql');
const express = require('express')
const signupRouter = new express.Router()
const bcrypt = require('bcrypt')
const generateAuthToken = require('../Security/jwt');
const jwt = require('jsonwebtoken');
const verifytoken = require('../Security/verifytoken-middleware');


const secret = process.env.JWT_KEY
const insertStudent = (student) => {
  return new Promise((resolve, reject) => {
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
          console.log('asdfasfsdaf')
          console.log(error)
          reject(error)
        }
        resolve(results)
      }
    );
    connection.end();
  })
}
signupRouter.post('/register', async (req, res) => {
  try {
    const student = {
      ...req.body
    }
    student.password = await bcrypt.hash(student.password, 8)
    console.log(student)

    insertStudent(student).then(async (student1) => {

      const token = await generateAuthToken(student.Student_Id)
      res.cookie('authtoken', token, {
        httpOnly: true,
        maxAge: 100000000,
      })
      res.status(200).send()
    }).catch((error) => {
      console.log(error)
      if(error.sqlMessage.includes('PRIMARY'))
      {
        const error={
          msg:'Student with the Student ID Already Exists'
        }
      return res.status(400).send(JSON.stringify(error))
      }
    })



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
      'Select * from student where Student_id = ?', [Student_Id], async (error, results) => {
        console.log(results)
        if (results.length === 0) {
          return reject('Student Not Found')
        }
        const verifyPassword = await bcrypt.compare(password, results[0].Password)
        if (!verifyPassword) {
          return reject('Wrong Password')
        }
        delete results[0].Password
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

      res.cookie('authtoken', token, {
        httpOnly: true,
        maxAge: 1000000,
      })
      const obj = {
        ...student,
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
signupRouter.get('/logout', verifytoken, (req, res) => {
  if (req.Student_Id) {
    res.cookie('authtoken', '', {
      httpOnly: true,
      maxAge: 0
    })
    return res.redirect('/login')
  }

  res.redirect('/login')
})


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



