let Item = require('../models/item.model')
const getErrorMessage = require('../shared/index')

exports.index = function (req, res) {
    try {
        Item.get(function (err, items) {
            if (err)
                throw new Error('')

            res.status(200).json({
                message: 'Items retrieved successfully',
                data: items
            })
        })
    } catch (e) {
        res.status(500).json(getErrorMessage(' retrieving items'))
    }
}

exports.new = async (req, res) => {
    try {
        let NewItem = new Item()
        NewItem.listId = req.body.listId
        NewItem.name = req.body.name
        NewItem.date = req.body.date

        const result = await NewItem.save()
        res.status(200).json({
            message: 'New item saved',
            data: result
        })
    } catch (e) {
        res.status(500).json(getErrorMessage('creating the item'))
    }
}

exports.view = function (req, res) {
    try {
        Item.findById(req.body.itemId, function (err, item) {
            if (err)
                throw new Error('')

            res.status(200).json({
                message: 'Item information',
                data: item
            })
        })
    } catch (e) {
        res.status(500).json(getErrorMessage('retrieving the item information'))
    }
}

exports.update = function (req, res) {
    try {
        Item.findById(req.body.itemId, function (err, item) {
            if (err)
                throw new Error('')

            item.name = req.body.name ? req.body.name : item.name
            item.date = req.body.date ? req.body.date : item.date

            item.save(function (err) {
                if (err)
                    throw new Error('')

                res.status(200).json({
                    message: 'Item name updated',
                    data: item
                })
            })
        })
    } catch (e) {
        res.status(500).json(getErrorMessage('updating the item information'))
    }
}

exports.delete = function (req, res) {
    try {
        Item.remove({
            _id: req.body.itemId
        }, function (err) {
            if (err)
                throw new Error('')

            res.json({
                status: 'success',
                message: 'Item deleted'
            })
        })
    } catch (e) {
        res.status(500).json(getErrorMessage('deleting the item'))
    }
}
