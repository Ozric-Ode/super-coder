const axios = require('axios');
const { json } = require('express');

const getverdict=(token,callback)=>{
    
    const options = {
       url:`https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        method: 'GET',
        params: {base64_encoded: 'true', fields: '*'},
        headers: {
         'x-rapidapi-key': '4e1e039266mshcce86ed12ec9438p14e845jsn8d68057c7eb8',
        //  'x-rapidapi-key': process.env.JUDGEZERO_API_KEY,
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
      //    useQueryString: true
        },
        json: true
      };
      axios(options)
      .then((chunk)=>{
       //   console.log(`byee${}`)
          return callback(chunk);

      //   console.log(chunk);
      })
      .catch((err)=>{
          if(err)
          {
            console.log(err);
            return callback("sorry bro!",err);
           
          }
        
      })

}

// getverdict('c24415b8-8e49-4325-8ffe-b324d081c078',(obj)=>{
// console.log(JSON.stringify(obj));
// })
 module.exports=getverdict;
