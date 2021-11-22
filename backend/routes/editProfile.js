const router = require('express').Router();
// const { countDocuments } = require('../models/farmersSignup.models');
let FarmerRegistration  = require('../models/farmersSignup.models');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

router.route('/').get((req,res)=>{

    console.log(req.session,'OK');
    FarmerRegistration.findOne({email:req.session.email},function(err,doc){
        if (err){
          console.log(err);
        }
        else{
            res.json(doc);
        }
    
    
});
});
module.exports=router;