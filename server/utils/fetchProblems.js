const dbFunction = require('../database/connectToDb.js')

const getProblemsNotInTest = async(Professor_Id) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_problem WHERE Professor_Id = ? AND Test_id is null";
        const problemsResponse = await pool.query(query, [Professor_Id]);
        console.log(problemsResponse[0]);
        const problems = problemsResponse[0];
        await dbFunction.disconnectFromDb(pool);
        return problems
    } catch (error) {
        console.log(error)
        return false;
    }
};

const getProblemsFromTestId = async(TestId) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM programming_problem WHERE Test_id = ?";
        const problemsResponse = await pool.query(query, [TestId]);
        console.log(problemsResponse[0]);
        const problems = problemsResponse[0];
        await dbFunction.disconnectFromDb(pool);
        return problems
    } catch (error) {
        console.log(error)
        return false;
    }
};



module.exports = {getProblemsFromTestId, getProblemsNotInTest};