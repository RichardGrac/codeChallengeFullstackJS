let List = require('../models/list.model')
let Item = require('../models/item.model')
const { map } = require('awaity')

exports.index = async (req, res) => {
    try {
        let lists = await List.find({})
        const newLists = await map(lists, async list => {
            const children = await Item.find({listId: list._id})
            return {...list.toObject(), items: children}
        })

        res.status(200).json({
            message: "Lists retrieved successfully",
            data: newLists
        });
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong while retrieving lists.",
        });
    }
};

exports.new = async (req, res) => {
    const name = req.body.name
    let NewList = new List();
    NewList.name = name;

    // save the list and check for errors
    try {
        const result = await NewList.save()
        res.status(200).json({
            message: 'New list saved',
            data: result
        })
    } catch (e){
        res.status(500).json({
            message: "Something went wrong while creating the list.",
            eMessage: e.message
        })
    }
};

// Handle view list info
exports.view = function (req, res) {
    List.findById(req.body.listId, function (err, list) {
        if (err)
            res.status(500).send(err);
        res.status(200).json({
            message: 'List information',
            data: list
        });
    });
};

// Handle update list name
exports.update = function (req, res) {
    List.findById(req.body.listId, function (err, list) {
        if (err)
            res.status(500).send(err);
        list.name = req.body.name ? req.body.name : list.name;

        // save the list and check for errors
        list.save(function (err) {
            if (err)
                res.status(500).json(err);
            res.status(200).json({
                message: 'List name updated',
                data: list
            });
        });
    });
};

// Handle delete list
exports.delete = function (req, res) {
    List.remove({
        _id: req.body.listId
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: 'success',
            message: 'List deleted'
        });
    });
};
