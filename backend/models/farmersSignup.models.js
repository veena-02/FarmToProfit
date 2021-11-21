const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmerRegSchema = new Schema({
  fullname: { type: String, required: true },
  pnumber: { type: Number, required: true, length:10  },
  streetnumber: { type: Number, required: false},
  streetname:{type: String, required: false},
  city:{type:String, required: false},
  pincode:{type: Number, required: false, length: 6},
  aadhar:{type: Number, required: false, length: 12},
  email:{type: String, required: false},
  account:{type: Boolean, required: false},
  password:{type: String, required: false},
});

const FarmerRegistration = mongoose.model('FarmerRegistration', farmerRegSchema);

module.exports = FarmerRegistration;