const dbFunction = require('../database/connectToDb.js')

const getTestCase = async(problemId) => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT Test_Case_File_Id,Problem_Id,convert(Input USING utf8) as Input,convert(Output USING utf8) as Output FROM test_case_file where Problem_Id = ?";
        const testCaseResponse = await pool.query(query,[problemId]);
        // console.log(testCaseResponse[0][0]);
        // console.log(testCaseResponse[0][0].Input);
        // console.log(testCaseResponse[0][0].Output);
        
        await dbFunction.disconnectFromDb(pool);
        const obj={
            Input:testCaseResponse[0][0].Input,
            Output:testCaseResponse[0][0].Output
        }
        // console.log(obj)
        return obj;
    } catch (error) {
        console.log(error)
        return false;
    }
};


module.exports = getTestCase;