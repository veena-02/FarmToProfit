const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: false},
    purchase_date: {type: String, required: true},
    purchase_price: {type:Number, required:true},
    vin_no: {type:String, required:true},
    equipment_type: {type:String, required:true},
    //description: {type:Array,required:true}
},{
    timestamps: true
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
