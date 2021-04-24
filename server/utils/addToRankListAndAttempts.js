const dbFunction = require('../database/connectToDb.js')

const insertIntoRanklist = async(Test_Id,Student_Id) => {
    try {
        const ranklist={
            Test_Id,
            Student_Id,
            Score:100
        }
        const attempts={
            ...ranklist
        }
        delete attempts.Score;
        const pool = await dbFunction.connectToDb();
        let query = "INSERT INTO ranklist SET ?";
        let query2 = "INSERT INTO attempts SET ?";
        
        const insertResponse = await pool.query(query, [ranklist]);
        const insertResponse2 = await pool.query(query2, [attempts]);
        console.log(insertResponse[0])
        console.log(insertResponse2[0])
        await dbFunction.disconnectFromDb(pool);
        return true
    } catch (error) {
        console.log(error)
        return false;
    }
};


module.exports = insertIntoRanklist;