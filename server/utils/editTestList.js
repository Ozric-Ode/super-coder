const dbFunction = require('../database/connectToDb.js')
const moment = require('moment')

const getData = async() => {
    try {
        const pool = await dbFunction.connectToDb();
        const date = moment().format('yyyy-MM-DD');
        let query = "SELECT * FROM programming_test WHERE Date > ?";
        const contestResponse = await pool.query(query, [date]);
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