const jwt = require('jsonwebtoken')


const generateAuthToken = (payload) => {
    const token = jwt.sign({
        Student_Id: payload
    }, 'sexysexysexysexyseyxy', { expiresIn: '10days' });

    return token
}

module.exports = generateAuthToken