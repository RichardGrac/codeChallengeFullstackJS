let Item = require('../models/item.model')

exports.index = function (req, res) {
    Item.get(function (err, items) {
        if (err) {
            res.status(500).json({
                message: "Something went wrong while retrieving items.",
            });
        }
        res.status(200).json({
            message: "Items retrieved successfully",
            data: items
        });
    });
};

exports.new = async (req, res) => {
    let NewItem = new Item();
    NewItem.listId = req.body.listId
    NewItem.name = req.body.name
    NewItem.date = req.body.date

    // save the item and check for errors
    try {
        const result = await NewItem.save()
        res.status(200).json({
            message: 'New item saved',
            data: result
        })
    } catch (e){
        res.status(500).json({
            message: "Something went wrong while creating the item.",
            eMessage: e.message
        })
    }
};

// Handle view list info
exports.view = function (req, res) {
    Item.findById(req.body.itemId, function (err, item) {
        if (err)
            res.status(500).send(err);
        res.status(200).json({
            message: 'Item information',
            data: item
        });
    });
};

// Handle update item name
exports.update = function (req, res) {
    Item.findById(req.body.itemId, function (err, item) {
        if (err)
            res.status(500).send(err);
        item.name = req.body.name ? req.body.name : item.name;
        item.date = req.body.date ? req.body.date : item.date

        // save the item and check for errors
        item.save(function (err) {
            if (err)
                res.status(500).json(err);
            res.status(200).json({
                message: 'Item name updated',
                data: item
            });
        });
    });
};

// Handle delete item
exports.delete = function (req, res) {
    Item.remove({
        _id: req.body.itemId
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: 'success',
            message: 'Item deleted'
        });
    });
};
