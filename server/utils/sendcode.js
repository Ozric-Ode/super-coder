const request = require('postman-request')

const getToken = ({ code, stdin, language_id }) => {
  return new Promise((resolve, reject) => {
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
                language_id,
                source_code: code,
                stdin,
            },
            json: true
        };
        request(options, (error, res) => {
            if (error) {
                // callback('Judge0 has stopped working')
                reject('Judge0 has stopped working')
            }
            // callback(undefined, res.body)
            // console.log(res.body)
            resolve(res.body)
        })
    })

}

const getTokenForSubmit = ({ code, stdin, language_id, expected_output}) => {
    return new Promise((resolve, reject) => {
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
                  language_id,
                  source_code: code,
                  stdin,
                  expected_output
              },
              json: true
          };
          request(options, (error, res) => {
              if (error) {
                  // callback('Judge0 has stopped working')
                  reject('Judge0 has stopped working')
              }
              // callback(undefined, res.body)
              // console.log(res.body)
              resolve(res.body)
          })
      })
  
  }
  

// const getToken=(code,callback)=>{
//     var req = unirest("POST", "https://judge0-ce.p.rapidapi.com/submissions");

//     req.query({
//         "base64_encoded": "true",
//         "fields": "*",
//         // "wait": "true"

//     });

//     req.headers({
//         "content-type": "application/json",
//         "x-rapidapi-key": process.env.JUDGEZERO_API_KEY,
//         "useQueryString": true
//     });

//     req.type("json");
//     req.send({
//         "language_id": 52,
//         "source_code": code,
//         "stdin": null
//     });

//     req.end(function (res) {
//         if (res.error) return callback("Judge0 has stopped working")

//         callback(undefined,res.body)
//         console.log('**************************************************************** chutiya ')
//             console.log(res.body)
//             console.log('**************************************************************** bhosdika ')
//     });

//     }

module.exports = {getToken, getTokenForSubmit}