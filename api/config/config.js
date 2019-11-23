const express = require('express')
const apiRoutes = require('../routing/api-routes')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.set('port', process.env.PORT || 3001)

    app.use(bodyParser.json({limit: '50mb'}))
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
    app.use(express.json())
    app.use(cors())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', "*")
        res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
        next()
    })

    apiRoutes(app)
    return app
}
