const jwt = require('jsonwebtoken')
const secret=process.env.JWT_KEY
const generateAuthToken = (payload) => {
    const token = jwt.sign({
        Student_Id: payload
    }, secret, { expiresIn: '10days' });

    return token
}

module.exports = generateAuthToken