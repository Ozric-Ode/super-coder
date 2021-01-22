const request = require('postman-request')

const workOnToken = (token, callback) => {
    const options = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        qs: { base64_encoded: 'false', fields: '*' },
        headers: {
            'x-rapidapi-key': '9214715568msh6f4e8adb1960f3ep1f7058jsn807141980d3f',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            useQueryString: true
        },
        json: true
    }

    request(options, function (error, res) {
        if (error) {
            return callback("Judge0 has stopped working")
        }
        callback(undefined, res.body)
        console.log(res.body)
    })
}

module.exports = workOnToken