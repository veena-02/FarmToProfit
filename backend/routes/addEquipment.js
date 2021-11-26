const router = require('express').Router();
let Equipment = require('../models/equipment.models.js');

router.route('/addvehicle').post((req, res) => {
  const newEquipment = new Equipment({

    name: req.body.name,
    brand: req.body.brand,
    purchase_date: req.body.purchaseDate,
    purchase_price: req.body.purchasePrice,
    vin_no: req.body.vinNo,
    equipment_type: req.body.equipmentType,
    //description: req.body.description
    });
  
  console.log(newFarmer+'00')
  newEquipment.save()
    .then(() => console.log('Equipment added!'))
    .catch(err => console.log(err));
});


module.exports = router;