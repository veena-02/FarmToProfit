const mongoose = require('mongoose')

var equipments = mongoose.model('equipments',
{
    title : {type:String, required:true},
    message : {type:String, required:true},
})

module.exports = { equipments}