let router = require('express').Router()
let listController = require('../controllers/list.controller')
let itemController = require('../controllers/item.controller')

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

    app.use('/api', router)
}
