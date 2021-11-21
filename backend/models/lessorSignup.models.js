const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessorRegSchema = new Schema({
  fullname: { type: String, required: true },
  pnumber: { type: Number, required: true, length:10  },
  streetnumber: { type: Number, required: false},
  streetname:{type: String, required: true},
  city:{type:String, required: true},
  pincode:{type: Number, required: true, length: 6},
  aadhar:{type: Number, required: true, length: 12},
  email:{type: String, required: true},
  account:{type: Boolean, required: true},
  password:{type: String, required: true},
});

const LessorRegistration = mongoose.model('LessorRegistration', lessorRegSchema);

module.exports = LessorRegistration;