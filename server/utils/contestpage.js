const dbFunction = require('../database/connectToDb.js')

const getData = async(Test_Id) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_test WHERE Test_Id = ?";
        const contestResponse = await pool.query(query, [Test_Id]);
        console.log(contestResponse[0])
        const contestItems = contestResponse[0];
        await dbFunction.disconnectFromDb(pool);
        return contestItems
    } catch (error) {
        console.log(error)
        return false;
    }
};


module.exports = getData;