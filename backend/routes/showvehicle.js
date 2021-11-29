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
router.route("/bookingrequest/:vin").get((req, res) => {
 var farmers=[];
 let c=0;
  Booking.findOne({vin:req.params.vin},function(err,doc){
    if (err){
      console.log(err);
    }
    else {
      console.log(req.params.vin, doc);
      let len=doc.bookreq.length;
        doc.bookreq.forEach(element =>{
          // console.log(element);
          FarmerRegistration.findOne({email:element},function(error,result){
            if(error){
              console.log(error);
            }
            else{
              const f={
                fullname: result.fullname,
                pnumber: result.Pnumber,
                streetnumber: result.streetnumber,
                streetname: result.streetname,
                city: result.city,
                pincode: result.pincode,
                email: result.email,
                vin: req.params.vin,
              };
              c=c+1;
              farmers.push(f);
              // console.log(c);
              if(c===len){
              console.log(farmers);
              res.json(farmers);
              }
            }
            // console.log(farmers);
          });
          // console.log(farmers);
        })
        // .then(()=>{console.log(farmers);
        //   res.json(farmers)});
        // console.log(farmers);
        // res.json(farmers);
    }
  });
});
router.route("/done").post((req,res)=>{
  console.log(req.body.vin,req.body.email);
    Booking.updateOne({vin:req.body.vin},{book:req.body.email,bookreq:[]},function(err,doc){
    if (err){
      console.log(err);
    }
    else{
      console.log(doc);
    }
  });
});

module.exports = router;
