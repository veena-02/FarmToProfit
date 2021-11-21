//const { Dropdown } = require('bootstrap');
const mongoose= require('mongoose');
//const { DropdownItem } = require('reactstrap');
const Schema=mongoose.Schema;

const loginSchema = new Schema({
    fullname:{
        type: String,
        required: true,
        unique: true,
        trim:true
        
    },
    // password:{
    //     type: String,
    //     required:true   
    // },
    // registration:{
    //     type: String,
    //     required:true
    // }
});
const Login =mongoose.model('Loginn',loginSchema);
module.exports = Login;