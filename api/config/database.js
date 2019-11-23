const mongoose = require('mongoose')
const database = require('./index')

mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('App Connected to Database!'))
    .catch(() => console.log('err'))
