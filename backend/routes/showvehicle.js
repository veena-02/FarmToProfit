/** @format */

const router = require("express").Router();
const FarmerRegistration = require("../models/farmersSignup.models");
// const { countDocuments } = require('../models/farmersSignup.models');
let Vehicle = require("../models/equipment.models");
const Booking =require("../models/booking.model");
router.route("/").get((req, res) => {
  //cat and sub category to search for

  // console.log(req.body.mail);

  Vehicle.find(
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
        res.json(docs);
      }
    }
  );
});

router.route("/details/:vin").get((req, res) => {
  // vin of vehicle to see dwtail for
  console.log(req.params.vin);
  Vehicle.findOne({ vin: req.params.vin }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
      res.json(doc);
    }
  });
});

router.route("/book").post((req, res) => {
  //send vin of bbooking vehicle req, and email of farmer who made it
  console.log(req.body.email);
  Vehicle.findOne({ vin: req.body.vin },function(err,doc){
    if (err){
      console.log(err);
    }
    else{
      Booking.findOne({vin:req.body.vin},function(err,doc){
        if (err){
          console.log(err);
          
        }
        else{
            if (doc.book==='' || doc.book===null){
              Booking.update({vin:req.body.vin},{$addToSet:{bookreq:req.body.email}},{new:true},function(error,docs){
                  if(error){
                    console.log(error);
                  }
                  else{
                    console.log(docs);
                  }
              });
            }
          }
        });
      }
      });
      
});

router.route("/bookingrequest").post((req, res) => {
  Vehicle.find({ email: req.body.email }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.json(doc);
      // doc.forEach((element) => {
      //   if (element.book !== "" || element.book !== null) {
      //     FarmerRegistration.findOne(
      //       { email: element.book },
      //       function (error, result) {
      //         if (error) {
      //           console.log(error);
      //         } else {
      //           res.json({
      //             fullname: result.fullname,
      //             pnumber: result.Pnumber,
      //             streetnumber: result.streetnumber,
      //             streetname: result.streetname,
      //             city: result.city,
      //             pincode: result.pincode,
      //             email: result.email,
      //             vin: element.vin,
      //           });
      //         }
      //       }
      //     );
      //   }
      // });
    }
  });
});

module.exports = router;
