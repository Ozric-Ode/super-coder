const mysql = require("mysql2/promise");
const dbFunction = require('../database/connectToDb.js')
const MySQLEvents = require("mysql-events");
var ranked = require("ranked");
// var table = document.getElementById("ranklist");

// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "monik",
//   database: "test",
// });
// conn.connect(function (err) {
//   if (err) throw err;
//   console.log("Database is connected successfully !");
//   getData();
// });
// for (var i = 0; i < rankedItems.length; i++) {
//   var row = table.insertRow(i);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   cell1.innerHTML = rankedItems[0].rank;
//   cell2.innerHTML = rankedItems[0].item["name"];
//   cell3.innerHTML = rankedItems[0].item["id"];
// // }
// conn.query(sql, function (err, data, fields) {
//   if (err) throw err;
//   console.log(fields);
//   var string = JSON.stringify(data);
//   console.log(">> string: ", string);
//   var json = JSON.parse(string);
//   console.log(">> json: ", json);
//   console.log(json[2].id);
//   // res.render('user-list', { title: 'User List', userData: data});
//   const scoreFn = (person) => person.id;
//   var rankedItems = ranked.ranking(json, scoreFn);
//   console.log(rankedItems);
//   console.log(rankedItems[0].rank);
//   console.log(rankedItems[0].item["name"]);
//   console.log(rankedItems[0].item["id"]);

// });
const getData = async(Test_Id) => {
  try {
    const pool = await dbFunction.connectToDb();
    let query = "SELECT * FROM ranklist WHERE Test_Id = ?";
    const ranklistResponse = await pool.query(query,[Test_Id]);
    // console.log(ranklistResponse[0])
    const ranklistItems=ranklistResponse[0];
    const scoreFn = (student) => student.Score;
    var rankedItems = ranked.ranking(ranklistItems, scoreFn);
    // console.log(rankedItems[0].item)
    await dbFunction.disconnectFromDb(pool);
    return rankedItems
  }
  catch(error)
  {
    console.log(error)
    return false;
  }
};


module.exports = getData;
