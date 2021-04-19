const mysql = require("mysql2/promise");
const dbFunction = require('../database/connectToDb.js')

const getData = async(Test_Id) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_test WHERE Test_Id = ?";
        const contestResponse = await pool.query(query, [Test_Id]);
        // console.log(ranklistResponse[0])
        const contestItems = contestResponse[0];
        //   const scoreFn = (student) => student.Score;
        //   var rankedItems = ranked.ranking(ranklistItems, scoreFn);
        // console.log(rankedItems[0].item)
        await dbFunction.disconnectFromDb(pool);
        return contestItems
    } catch (error) {
        console.log(error)
        return false;
    }
};


module.exports = getData;