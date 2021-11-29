const router = require('express').Router();
let LessorRegistration = require('../models/lessorSignup.models');
const bcrypt=require('bcrypt');
const saltRounds=10;
//const { default: farmerRegistration}= require('../../src/Components/FarmerRegistration');
// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/register').post((req, res) => {
  // const fullname = req.body.username;
  // const pnumber = req.body.pnumber;
  // const streetnumber= req.body.streetNo;
  // const streetname= req.body.streetname;
  // const city= req.body.city;
  // const pincode= req.body.pincode;
  // const aadhar= req.body.aadhar;
  // const email=req.body.email;
  // const account= req.body.haveAccount;
  // const password= req.body.password;
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

  const newLessor = new LessorRegistration({
      fullname: req.body.name,
      pnumber: req.body.pnumber,
      streetnumber:req.body.streetNo,
      streetname:req.body.streetName,
      city :req.body.city,
      pincode :req.body.pincode,
      aadhar:req.body.aadhar,
      email:req.body.email,
      account:req.body.haveAccount,
      password:hash});
  console.log(newLessor+'00')
  newLessor.save()
    .then(() => res.json(req.body.email))
    .catch(err => console.log(err));
    
});
});
module.exports = router;