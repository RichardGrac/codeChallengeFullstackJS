const express = require('express')
// const morgan = require('morgan')
// const errorHandler = require('errorhandler')
// const path = require('path')
const apiRoutes = require('../routing/api-routes')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {

    // Settings
    app.set('port', process.env.PORT || 3001)

    // Middleware
    // app.use(morgan('dev'))
    app.use(bodyParser.json({limit: '50mb'}))
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
    app.use(express.json())
    app.use(cors())

    // Routes
    // routes(app)
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', "*")
        res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
        next()
    })

    apiRoutes(app)

    // Static files
    // app.use('/public', express.static(path.join(__dirname, '../public')))

    // Error handlers
    // if(app.get('env') === 'development') {
    //     app.use(errorHandler)
    // }

    return app
}
