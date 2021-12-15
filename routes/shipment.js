var express = require('express');
var router = express.Router();
var shipmentController = require('../controllers/shipment.controller');



router
    .get('/', shipmentController.home)
    .get('/create', shipmentController.createShipment)
    .get('/change', shipmentController.changeStatus)

module.exports = router;
