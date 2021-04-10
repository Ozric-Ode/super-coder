const request = require('postman-request')

const workOnToken = async(token) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const options = {
                method: 'GET',
                url: `https://judge0-ce.p.rapidapi.com/submissions/${token.token}`,
                qs: { base64_encoded: 'true', fields: '*' },
                headers: {
                    'x-rapidapi-key': process.env.JUDGEZERO_API_KEY
                }
            }
            request(options, (error, response) => {
                if (error) {
                    // callback("Judge0 has stopped working")
                    reject("Judge0 has stopped working ")
                }
                // callback(undefined, response.body)
                // console.log(response.body);
                resolve(response.body)
            })
        }, 8000)

    })
}
module.exports = workOnToken




// const options = {
//     method: 'GET',
//     url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
//     qs: { base64_encoded: 'false', fields: '*',wait:"true" },
//     headers: {
//         'x-rapidapi-key': process.env.JUDGEZERO_API_KEY,
//         'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//         useQueryString: true
//     },
//     json: true
// }


//     request(options,(error, res)=>{
//     if (error) {
//         return callback("Judge0 has stopped working")
//     }
//     body=res.body
//     callback(undefined,res.body)
//     console.log(res.body.token)

// if(res.body.status.id==2||res.body.status.id)
//         {
//             continue;
//         }
//         else
//         break;
// const workOnToken = (token, callback) => {
//     const url='https://judge0-ce.p.rapidapi.com/submissions/'+encodeURIComponent(token)
//     var req = unirest("GET", url);

//     req.query({
//         "base64_encoded": "true",
//         "fields": "*"
//     });

//     req.headers({
//         "x-rapidapi-key":

//         "useQueryString": true
//     });
//     var body;
//     do
//     {
//     req.end(function (res) {
//         if (res.error)  callback("Judge0 has stopped working")


//         console.log(res.body)
//         body=res.body
//     });
// } while(body.status.id==2||body.status.id==3);  

//     callback(undefined, body)
//     }