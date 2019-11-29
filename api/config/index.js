const mongodbUser = process.env.MONGO_USER
const mongodbPassword = process.env.MONGO_PWD

const mongoConfig = {
    url: process.env.NODE_ENV !== 'production' ?
        `mongodb://localhost/mern_project` :
        `mongodb+srv://${mongodbUser}:${mongodbPassword}@cluster0-lhq7m.mongodb.net/test?retryWrites=true&w=majority`,
}

module.exports = mongoConfig
