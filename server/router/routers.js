const request = require('postman-request')
const express = require('express')
const getToken=require('../utils/sendcode')
const workOnToken=require('../utils/recieveSolution')
const { response } = require('express')
const submitRouter = new express.Router()

submitRouter.post('/submit', async (req, res) => {
    const a = req.body
    console.log(a.code)
    
    getToken(a.code,(error,token)=>{
        
        if(error)
        {
        return res.status(400).send(error)    
        }
            setTimeout(()=>{
                console.log('5 seconds completed')
                    workOnToken(token,(error,finalSolution)=>{
                        if(error)
                        {
                            return res.status(401).send(error)
                        }
                        res.send(finalSolution)
                    })
            },6000)
           
       
    })
       
    
})

module.exports = submitRouter
