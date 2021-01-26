const express = require('express')
const getToken=require('../utils/sendcode')
const workOnToken=require('../utils/recieveSolution')


const submitRouter = new express.Router()   

submitRouter.post('/submit', (req, res) => {
   
    // console.log(a.code)
    const obj={
        code:req.body.code,
        stdin:req.body.stdin,
        language_id:req.body.language_id,
    }
    getToken(obj,(error,body={})=>{
        
        if(error)
        {
          return res.status(400).send(error)    
        }
        // console.log('madarchod',body)
     console.log(body)
          workOnToken(body,(error,finalSolution)=>{
            if(error)
            {
                return res.status(401).send(error)
            }
            res.send(finalSolution)
            })
       
    })
       
    
})
// submitRouter.post('/submit/token', async (req, res) => {
//     const token = req.body.token
//     console.log('chutiya ',token)
   
    

        
   
    
// })


    // var id=1
    //    var description

 // id=finalSolution.status.id
            // description=finalSolution.status.description
            // soln=finalSolution
//     if(description==='In Queue'||description==='Processing')
        //   {  continue;
        //   }
        //     else
        //     {
        //         console.log('chutiya')
        //     break;
        //     }
    // }
   

// console.log('5 seconds completed')
// workOnToken(token,(error,finalSolution)=>{
//     if(error)
//     {
//         return res.status(401).send(error)
//     }
//     res.send(finalSolution)
// })
// 


module.exports = submitRouter
