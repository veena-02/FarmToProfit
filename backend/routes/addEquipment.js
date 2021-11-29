const router = require('express').Router();
let Equipment = require('../models/equipment.models.js');
let Booking= require('../models/booking.model');
router.route('/add').post((req, res) => {
  const newEquipment = new Equipment({
    name: req.body.name,
    brand: req.body.brand,
    purchasedate: req.body.purchasedate,
    price: req.body.price,
    vin: req.body.vin,
    cat: req.body.cat,
    subcat:req.body.subcat,
    description: req.body.description,
    email:req.body.email

    // images:req.body.images,
    //bill:req.body.bill
    });
  
  newEquipment.save()
    .then(() => console.log('Equipment added!'))
    .catch(err => console.log(err));
  const newBook= new Booking({
            vin:req.body.vin,
            book:'',
            bookreq:[]
          });
          newBook.save()
          .then(()=>res.json(req.body.email))
          .catch(err=>console.log(err)); 
  
});


module.exports = router;