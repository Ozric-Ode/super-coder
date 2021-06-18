const dbFunction = require('../database/connectToDb.js');

const getCourses = async () => {
    console.log('hhelo');
    try {
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM course";
        const courseResponse = await pool.query(query);
        console.log(courseResponse[0]);
        const course = courseResponse[0];
        await dbFunction.disconnectFromDb(pool);
        return course;
    } catch (error) {
        console.log(error);
        return false;
    }
};
const getCourse = async (Student_Id) => {
    try {
        console.log("Student_Id", Student_Id);
        const pool = await dbFunction.connectToDb();
        let query = "SELECT * FROM enrolls where Student_Id = ?";
        const studentCourseRes = await pool.query(query, [Student_Id]);
        console.log(studentCourseRes[0]);
        const course = studentCourseRes[0];
        await dbFunction.disconnectFromDb(pool);
        return course;
    } catch (error) {
        console.log(error);
        return false;
    }
};


module.exports = { getCourses, getCourse };