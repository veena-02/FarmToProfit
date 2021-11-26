const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: false},
    purchasedate: {type: Date, required: true},
    price: {type:Number, required:true},
    vin: {type:String, required:true},
    cat: {type:String, required:true},
    subcat:{type:String, required:true},
    description: {type:Array,required:true},
    images:{type:String, required:false},
    bill:{type:String, required:false},
    email:{type:String, required:true}
},{
    timestamps: true
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
