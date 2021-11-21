const router = require('express').Router();
let FarmerRegistration = require('../models/farmersSignup.models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//const { default: farmerRegistration}= require('../../src/Components/FarmerRegistration');
// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// }); .catch(err => res.status(400).js

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
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    
  const newFarmer = new FarmerRegistration({
      fullname: req.body.name, 
      pnumber: req.body.pnumber,
      streetnumber:req.body.streetNo,
      streetname:req.body.streetName,
      city :req.body.city,
      pincode :req.body.pincode,
      aadhar:req.body.aadhar,
      email:req.body.email,
      account:req.body.haveAccount,
      password:req.body.hash
    });
  
  console.log(newFarmer+'00')
  newFarmer.save()
    .then(() => console.log('Farmer added!'))
    .catch(err => console.log(err));
});
});

module.exports = router;