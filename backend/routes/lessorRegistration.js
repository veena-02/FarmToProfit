const router = require('express').Router();
let LessorRegistration = require('../models/lessorSignup.models');
//const { default: farmerRegistration}= require('../../src/Components/FarmerRegistration');
// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/register').post((req, res) => {
  const fullname = req.body.username;
  const pnumber = req.body.pnumber;
  const streetnumber= req.body.streetNo;
  const streetname= req.body.streetname;
  const city= req.body.city;
  const pincode= req.body.pincode;
  const aadhar= req.body.aadhar;
  const email=req.body.email;
  const account= req.body.haveAccount;
  const password= req.body.password;

  const newLessor = new LessorRegistration({
      fullname,
      pnumber,
      streetnumber,
      streetname,
      city,
      pincode,
      aadhar,
      email,
      account,
      password});
  console.log(newLessor+'00')
  newLessor.save()
    .then(() => console.log('Lessor added!'))
    .catch(err => console.log(err));
});

module.exports = router;