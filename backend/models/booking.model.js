//const { Dropdown } = require('bootstrap');
const mongoose= require('mongoose');
//const { DropdownItem } = require('reactstrap');
const Schema=mongoose.Schema;

const bookingSchema = new Schema({
    vin:{
        type: String,
        required: true,
        unique: true,
        
    },
    bookreq:{
        type:Array,
        required:false
    },
    book:{
        type:String,
        required:false
    }
});
const Booking =mongoose.model('Booking',bookingSchema);
module.exports = Booking;