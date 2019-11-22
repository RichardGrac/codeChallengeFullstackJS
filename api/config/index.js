const mongodbUser = 'rdgn-backend-user'
const mongodbPassword = 'hqPZ7OmULAeXIJUI'

const mongoConfig = {
    // url: `mongodb+srv://${mongodbUser}:${mongodbPassword}@cluster0-xn3yl.mongodb.net/richard_resume?retryWrites=true&w=majority`,
    url: `mongodb://localhost/mern_project`,
    mongodbUser,
    mongodbPassword
}

module.exports = mongoConfig
