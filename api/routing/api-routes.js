let router = require('express').Router()
let listController = require('../controllers/list.controller')
let itemController = require('../controllers/item.controller')

const authMiddleware = async (req, res, next) => {
    const {cookies: {auth = null}} = req
    if (auth) {
        console.log(`Auth Cookie received, value: ${auth}`)
        next()
    } else res.status(401).send({message: 'Auth Failed'})
}

module.exports = app => {
    router.get('/lists', listController.index)
    router.post('/lists', listController.new)
    router.get('/lists/list', listController.view)
    router.patch('/lists', listController.update)
    router.put('/lists', listController.update)
    router.delete('/lists', listController.delete)

    router.get('/items', itemController.index)
    router.post('/items', itemController.new)
    router.get('/items/item', itemController.view)
    router.patch('/items', itemController.update)
    router.put('/items', itemController.update)
    router.delete('/items', itemController.delete)

    // Without cookie checking
    app.use('/api', router)

    // To check for cookie in the request:
    // app.use('/api', authMiddleware, router)
}
