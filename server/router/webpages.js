const express = require('express')
const path = require('path')
const webpagesRouter = new express.Router()



webpagesRouter.get('/ide', (req, res) => {

    res.sendFile('ide.html', { root: path.join(__dirname, '../../Webpages') })
})




module.exports = webpagesRouter