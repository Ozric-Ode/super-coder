const dbFunction = require('../database/connectToDb.js')

const getData = async(Problem_Id) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_problem WHERE Problem_Id = ?";
        const problemResponse = await pool.query(query, [Problem_Id]);
        console.log(problemResponse[0])
        const problemItems = problemResponse[0];
        await dbFunction.disconnectFromDb(pool);
        return problemItems
    } catch (error) {
        console.log(error)
        return false;
    }
};


module.exports = getData;