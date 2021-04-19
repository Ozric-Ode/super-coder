const mysql = require("mysql2/promise");
const MySQLEvents = require("mysql-events");
var ranked = require("ranked");
var table = document.getElementById("ranklist");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "monik",
  database: "test",
});
conn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
  getData();
});

var getData = function () {
  var sql = "SELECT * FROM forTest";
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(fields);
    var string = JSON.stringify(data);
    console.log(">> string: ", string);
    var json = JSON.parse(string);
    console.log(">> json: ", json);
    console.log(json[2].id);
    // res.render('user-list', { title: 'User List', userData: data});
    const scoreFn = (person) => person.id;
    var rankedItems = ranked.ranking(json, scoreFn);
    console.log(rankedItems);
    console.log(rankedItems[0].rank);
    console.log(rankedItems[0].item["name"]);
    console.log(rankedItems[0].item["id"]);
    // for (var i = 0; i < rankedItems.length; i++) {
    //   var row = table.insertRow(i);
    //   var cell1 = row.insertCell(0);
    //   var cell2 = row.insertCell(1);
    //   var cell3 = row.insertCell(2);
    //   cell1.innerHTML = rankedItems[0].rank;
    //   cell2.innerHTML = rankedItems[0].item["name"];
    //   cell3.innerHTML = rankedItems[0].item["id"];
    // }
  });
};

var mysqlEventWatcher = new MySQLEvents({
  host: "localhost",
  user: "root",
  password: "monik",
});
mysqlEventWatcher.add(
  "test.fortest",
  function (oldRow, newROw, event) {
    //   if(oldRow==null){
    // 	  console.log("old row null")
    // 	  var reslt1=oldRow;
    // 	  var reslt2=newROw;
    // 	  console.log(event);
    // 	  console.log(oldRow);
    // 	  console.log(newROw);
    // 	  console.log(newROw["fields"]["name"]);
    // 	  console.log(newROw["fields"]["id"]);
    // 	}
    // 	if(newROw==null){
    // 		console.log("new row deleted");
    // 	}

    // 	if (oldRow !== null && newROw !== null) {
    // 		var reslt1=oldRow;
    // 	  var reslt2=newROw;
    // 	  console.log(oldRow);
    // 	  console.log(newROw["changedColumns"]);
    // 	console.log("updation")
    //   }
    getData();
  },
  "testing"
);
module.exports = conn;
