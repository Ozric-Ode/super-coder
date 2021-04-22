const dbFunction = require('../database/connectToDb.js')


const getData = async(Professor_Id) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_problem WHERE Professor_Id";
        const problemResponse = await pool.query(query, [Professor_Id]);
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