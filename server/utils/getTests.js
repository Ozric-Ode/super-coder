const dbFunction = require('../database/connectToDb.js')
const moment = require('moment');
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
        const getTests = async() => {
            try {
                const pool = await dbFunction.connectToDb();
                let query = "SELECT * FROM programming_test";
                const testResponse = await pool.query(query);
                // console.log(testResponse[0]);
                const tests = testResponse[0];
                await dbFunction.disconnectFromDb(pool);
                const currentDate=moment().utcOffset("+05:30").format('YYYY-MM-DD');
                const currentTime=moment().utcOffset("+05:30").format(moment.HTML5_FMT.TIME_SECONDS);
                
                const pastTests=[];
                const currentTests=[];
                const futureTests=[];
                tests.forEach((test)=>{
                    test.Date=moment(test.Date).format('YYYY-MM-DD');
                })
                // console.log(tests)
                // console.log('hello',moment(tests[0].Date).format('YYYY-MM-DD'))
                tests.forEach((test)=>{
                  
                    if(test.Date<currentDate)
                    pastTests.push(test);
                    else
                    if(test.Date==currentDate){
                        if(currentTime>test.End_Time)
                        pastTests.push(test)
                        else if(currentTime<test.End_Time){
                            currentTests.push(test);
                        }
                        else
                        {
                            futureTests.push(test)
                        }
                    }
                    else
                    {
                        futureTests.push(test)
                    }
                })
                return {
                    pastTests,
                    currentTests,
                    futureTests
                }
            } catch (error) {
                console.log(error)
                return false;
            }
        };


    module.exports = {getTest, checkIfTestExists,getTests};