const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
        listId: { type: String, required: true },
        name: { type: String, required: true },
        date: { type: Date, required: true }
    },
    { writeConcern: { w: "majority" , wtimeout: 5000 }}
)

// Export Message model
var Item = module.exports = mongoose.model('Item', ItemSchema);
module.exports.get = function (callback, limit) {
    Item.find(callback).limit(limit);
}
