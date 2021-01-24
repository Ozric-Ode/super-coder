
const axios = require('axios');
const getver = require(`./getVerdict.js`);

const receivetoken = (obj, callback) => {


    const options = {
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        method: 'POST',
        params: { base64_encoded: 'true', fields: '*' },
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-key': '4e1e039266mshcce86ed12ec9438p14e845jsn8d68057c7eb8',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            //   useQueryString: true
        },
        data: {
            language_id: obj.lang,
            source_code: obj.code,
            stdin: 'SnVkZ2Uw'
        },
        json: true
    };

    axios.request(options)
        .then((chunk) => {
            //console.log(obj.code);
            // return callback({}, err);
            return callback(chunk, undefined);
            //console.log(chunk);
        })
        .catch((err) => {

            if (err) {
                console.log(err);
                return callback({}, err);
            }
            //console.log(`endd`);
        })

}

module.exports=receivetoken;

