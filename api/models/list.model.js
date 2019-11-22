const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
    name: { type: String, required: true }
},
    { writeConcern: { w: "majority" , wtimeout: 5000 }}
)

// Export Message model
var List = module.exports = mongoose.model('List', ListSchema);
module.exports.get = function (callback, limit) {
    List.find(callback).limit(limit);
}
