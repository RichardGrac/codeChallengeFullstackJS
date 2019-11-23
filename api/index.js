const express = require('express')
const config = require('./config/config')

require('./config/database')
const app = config(express())

app.listen(app.get('port'), () => {
    console.log("Running MERN Backend on port " + app.get('port'))
})

module.exports = app
