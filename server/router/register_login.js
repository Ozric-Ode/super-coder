const express = require('express')
const signupRouter = new express.Router()
const bcrypt = require('bcrypt')
const generateAuthToken = require('../Security/jwt');
const verifytoken = require('../Security/verifytoken-middleware');
const dbFunction=require('../database/connectToDb.js')


signupRouter.post('/register', async (req, res) => {
  try {
    const student = {
      ...req.body
    }
    student.password = await bcrypt.hash(student.password, 8)
    const pool=await dbFunction.connectToDb();
    const query='SELECT Student_Id FROM student where Student_Id = ?';
    const studentRes=await pool.query(query,[student.Student_Id]);
      if(!!studentRes[0][0])
      {
        const error={
          msg:'Student with the Student ID Already Exists'
        }
      return res.status(400).send(JSON.stringify(error))
      }
    const [rows,fields]=await pool.query('Insert into student SET ?', [student]);
    console.log(rows)
    await dbFunction.disconnectFromDb(pool);
    const token = await generateAuthToken(student.Student_Id)
      res.cookie('authtoken', token, {
        httpOnly: true,
        maxAge: 100000000,
      })
      res.status(200).send()
  }
  catch (error) {
    console.log(error)
    res.send(400)
  }
})

signupRouter.post('/login', async (req, res) => {
  try {
    console.log(req.body.Student_Id)
    const pool=await dbFunction.connectToDb();
    const query='Select * from student where Student_id = ?';
    const studentRes=await pool.query(query,[req.body.Student_Id]);
    await dbFunction.disconnectFromDb(pool);
    var errorobj={errormsg:''};
    if(studentRes[0].length===0)
    {
     errorobj.errormsg='Student Not Found';
     return res.status(400).send(JSON.stringify(errorobj));
    }
    const verifyPassword = await bcrypt.compare(req.body.password, studentRes[0][0].Password)
    if (!verifyPassword) {
      errorobj.errormsg='Wrong Password';
     return res.status(400).send(JSON.stringify(errorobj));
    }
    const token = await generateAuthToken(req.body.Student_Id)
    res.cookie('authtoken', token, {
      httpOnly: true,
      maxAge: 1000000,
    })
    const obj = {
      ...studentRes[0][0],
      token
    }
    return res.status(200).send(JSON.stringify(obj));
  } catch (error) {
    console.log(error)
    const errorobj = {
      errormsg: error,
    }
    res.status(400).send(JSON.stringify(errorobj))
  }
})

signupRouter.post('/login/professor', async (req, res) => {
  try {
    console.log(req.body.Email)
    const pool=await dbFunction.connectToDb();
    const query='Select * from professor where Email = ?';
    const professorRes=await pool.query(query,[req.body.Email]);
    await dbFunction.disconnectFromDb(pool);
    var errorobj={errormsg:''};
    if(professorRes[0].length===0)
    {
     errorobj.errormsg='User Not Found';
     return res.status(400).send(JSON.stringify(errorobj));
    }
    const verifyPassword = await bcrypt.compare(req.body.password, professorRes[0][0].Password)
    if (!verifyPassword) {
      errorobj.errormsg='Wrong Password';
     return res.status(400).send(JSON.stringify(errorobj));
    }
    const token = await generateAuthToken(professorRes[0][0].Professor_Id)
    res.cookie('authtoken', token, {
      httpOnly: true,
      maxAge: 1000000,
    })
    const obj = {
      ...professorRes[0][0],
      token
    }
    return res.status(200).send(JSON.stringify(obj));
  } catch (error) {
    console.log(error)
    const errorobj = {
      errormsg: error,
    }
    res.status(400).send(JSON.stringify(errorobj))
  }
})



signupRouter.get('/logout', verifytoken.verifytokenStudent, (req, res) => {
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
