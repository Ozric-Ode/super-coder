const jwt = require('jsonwebtoken')

const verifytoken = (req, res, next) => {
    const token = req.cookies.authtoken || ''

    if (token === '') {
        return next()
    }
    try {
        const decoded = jwt.verify(token, 'sexysexysexysexyseyxy')
        console.log(decoded)
        if (!decoded) {
            return next()
        }
        console.log(decoded.Student_Id + ' dsafasdf asdfsdaf')
        req.Student_Id = decoded.Student_Id;
        next()
    } catch (error) {
        console.log(error)
        return next()
    }
}
module.exports = verifytoken