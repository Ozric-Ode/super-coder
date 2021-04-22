const dbFunction = require('../database/connectToDb.js')

const getCourses = async() => {
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM course";
        const courseResponse = await pool.query(query);
        console.log(courseResponse[0]);
        const course = courseResponse[0];
        await dbFunction.disconnectFromDb(pool);
        return course
    } catch (error) {
        console.log(error)
        return false;
    }
};


module.exports = getCourses;