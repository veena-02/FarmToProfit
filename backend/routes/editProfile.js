const router = require('express').Router();
// const { countDocuments } = require('../models/farmersSignup.models');
let FarmerRegistration  = require('../models/farmersSignup.models');
let LessorRegistration = require('../models/lessorSignup.models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.route('/').post((req,res)=>{
    
    // console.log(req.body.mail);
    if (req.body.rt==='Farmer'){
    FarmerRegistration.findOne({email:req.body.mail},function(err,doc){
        if (err){
          console.log(err);
        }
        else{
          // console.log(doc);
            res.json(doc);
        }
      });
    }
    else{
      LessorRegistration.findOne({email:req.body.mail},function(err,doc){
        if (err){
          console.log(err);
        }
        else{
          // console.log(doc);
            res.json(doc);
        }
      });
    }
});


router.route('/edit').post((req,res)=>{
  console.log(req.body.email,"err");
  if (req.body.rt==='Farmer'){
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    
  const doc = FarmerRegistration.findOneAndUpdate({email:req.body.mail},
    {
      fullname: req.body.name, 
      pnumber: req.body.pnumber,
      streetnumber:req.body.streetNo,
      streetname:req.body.streetName,
      city :req.body.city,
      pincode :req.body.pincode,
      account:req.body.haveAccount,
      password:hash
    },
    {new:true});
    console.log(doc);
  });
}
else{
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    
  const doc = LessorRegistration.findOneAndUpdate({email:req.body.mail},
    {
      fullname: req.body.name, 
      pnumber: req.body.pnumber,
      streetnumber:req.body.streetNo,
      streetname:req.body.streetName,
      city :req.body.city,
      pincode :req.body.pincode,
      account:req.body.haveAccount,
      password:hash
    },
    {new:true});
    console.log(doc);
  });

}
});
module.exports=router;