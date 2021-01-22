const request = require('postman-request')


const getToken=(code,callback)=>{
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        qs: { base64_encoded: 'true', fields: '*' },
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-key': process.env.JUDGEZERO_API_KEY,
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            useQueryString: true
        },
        body: {
            language_id: 52,
            source_code: code,
            stdin: null
        },
        json: true
    };   

     request(options,(error, res)=> {
        if (error)
        {
           return callback("Judge0 has stopped working")
        }
        callback(undefined,res.body.token)
        console.log(res.body)
     })
}

module.exports=getToken
