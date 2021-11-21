/** @format */

const router = require("express").Router();
const bcrypt = require("bcrypt");
const axios= require('axios');
let FarmerRegistration = require("../models/farmersSignup.models");
let LessorRegistration = require("../models/lessorSignup.models");
//const { default: login } = require('../../src/Components/Login/Login');

router.route("/login").post((req,res)=>{
  console.log(req.body.registrationType);
  if (req.body.registrationType === "Farmer"){
    FarmerRegistration.findOne({email:req.body.user},function(err,doc){
      if (err){
        console.log(err);
      }
      else{
        bcrypt.compare(req.body.password,doc.password,function(err,result){
          if (err){
            console.log(err);
            res.sendStatus(400);            
          }
          else{
            //console.log('true');
            res.json(doc.fullname);
          }
        })
        console.log(doc.fullname);
      }
    });
  }
  else{
    LessorRegistration.findOne({email:req.body.user},function(err,doc){
      if (err){
        console.log(err);
      }
      else{
        bcrypt.compare(req.body.password,doc.password,function(err,result){
          if (err){
            console.log(err);
            res.sendStatus(400);            
          }
          else{
            console.log('true');
            res.sendStatus(200);
          }
        })
        console.log(doc)
      }
    });

  }
});

// router.route("/login").post((req, res) => {
//   //const user= req.body.user;
//   //const password=req.body.password;
//   const rt = req.body.registrationType;
//   if (rt === "Farmer") {
//     //userdb= require('../models/farmersSignup.models');
//     //let usermodel= FarmerRegistration;
//     FarmerRegistration.findOne({ email: req.body.user }, function (err, docs) {
//       if (err) {
//         console.log(err);
//         FarmerRegistration.findOne(
//           { phone: req.body.user },
//           function (err, docs) {
//             if (err) {
//               console.log(err);
//             } else {
//               bcrypt.compare(
//                 req.body.password,
//                 docs.password,
//                 function (err, result)
//                  {
//                   if (result === true) {
//                     //axios.get('http://localhost:3001/');
//                     console.log(result);
//                   }
//                   else{
//                     console.log(err);
//                   }
//                 }
//               );
//             }
//           }
//         );
//       } else {
        
//         bcrypt.compare(
//           req.body.password,
//           docs.password,
//           function (err, result) {
//             if (result === true) {
//               //console.log('ok');
//               // axios.get('http://localhost:3001/');
//               console.log(result);
//             }
//             else{
//               console.log(docs.password);
//               console.log(err);
//             }
//           }
//         );
//       }
//       //res.json({valid:sucess});
//     });
//   } else {
//     //userdb=require('../models/lessorSignup.models');
//     //let usermodel= LessorRegistration;
//     LessorRegistration.findOne({ email: req.body.user }, function (err, docs) {
//       if (err) {
//         console.log(err);
//         LessorRegistration.findOne(
//           { phone: req.body.user },
//           function (err, docs) {
//             if (err) {
//               console.log(err);
//             } else {
//               bcrypt.compare(
//                 req.body.password,
//                 docs.password,
//                 function (err, result) {
//                   if (result === true) {
//                     // axios.get('http://localhost:3001/');
//                     console.log(result);
//                   }
//                   else{
//                     console.log(err);
//                   }
//                 }
//               );
//             }
//           }
//         );
//       } 
//       else {
//         bcrypt.compare(
//           req.body.password,
//           docs.password,
//           function (err, result) {
//             if (result === true) {
//               //axios.get('http://localhost:3001/');
//               console.log(result);
//         }
//         else{
//           console.log(err);
//         }
            
//           }
//         );
//       }
//     });
//   }
// });

module.exports = router;