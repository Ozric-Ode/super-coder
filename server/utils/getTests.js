const dbFunction = require('../database/connectToDb.js')

const getTest = async(testId) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_test WHERE Test_Id = ?";
        const testResponse = await pool.query(query,[testId]);
        console.log(testResponse[0]);
        const test = testResponse[0];
        await dbFunction.disconnectFromDb(pool);
        return test
    } catch (error) {
        console.log(error)
        return false;
    }
};
const checkIfTestExists = async(Problem_Id) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT Problem_Id FROM programming_problem WHERE Problem_Id = ?";
        const testResponse = await pool.query(query, [Problem_Id]);
        await dbFunction.disconnectFromDb(pool);
        if(!testResponse||!testResponse[0]||testResponse[0].length===0)
        {
            return false;
        }
        return true
    } catch (error) {
        console.log(error)
        return false;
    }
};


    module.exports = {getTest, checkIfTestExists};