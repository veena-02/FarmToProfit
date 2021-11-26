const router = require('express').Router();
let Equipment = require('../models/equipment.models.js');

router.route('/add').post((req, res) => {
  const newEquipment = new Equipment({

    name: req.body.name,
    brand: req.body.brand,
    purchasedate: req.body.purchaseDate,
    price: req.body.purchasePrice,
    vin: req.body.vinNo,
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
});


module.exports = router;