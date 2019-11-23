let List = require('../models/list.model')
let Item = require('../models/item.model')
const { map } = require('awaity')
const getErrorMessage = require('../shared/index')

exports.index = async (req, res) => {
    try {
        let lists = await List.find({})
        const newLists = await map(lists, async list => {
            const children = await Item.find({listId: list._id})
            return {...list.toObject(), items: children}
        })

        res.status(200).json({
            message: 'Lists retrieved successfully',
            data: newLists
        })
    } catch (e) {
        res.status(500).json(getErrorMessage(' retrieving lists'))
    }
}

exports.new = async (req, res) => {
    try {
        const name = req.body.name
        let NewList = new List()
        NewList.name = name

        const result = await NewList.save()
        res.status(200).json({
            message: 'New list saved',
            data: result
        })
    } catch (e){
        res.status(500).json(getErrorMessage('creating the list'))
    }
}

exports.view = function (req, res) {
    try {
        List.findById(req.body.listId, function (err, list) {
            if (err)
                throw new Error('')
            res.status(200).json({
                message: 'List information',
                data: list
            })
        })
    } catch (e) {
        res.status(500).json(getErrorMessage('retrieving the list information'))
    }
}

exports.update = function (req, res) {
    try {
        List.findById(req.body.listId, function (err, list) {
            if (err)
                throw new Error('')

            list.name = req.body.name ? req.body.name : list.name

            list.save(function (err) {
                if (err)
                    throw new Error('')

                res.status(200).json({
                    message: 'List name updated',
                    data: list
                })
            })
        })
    } catch (e) {
        res.status(500).json(getErrorMessage('updating the list information'))
    }
}

exports.delete = function (req, res) {
    try {
        List.remove({
            _id: req.body.listId

        }, function (err) {
            if (err)
                throw new Error('')

            res.json({
                status: 'success',
                message: 'List deleted'
            })
        })
    } catch (e) {
        res.status(500).json(getErrorMessage('deleting the list'))
    }
}
