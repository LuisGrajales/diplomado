var express = require('express');
var router = express.Router();
var operationController = require('../controllers/operations.controller');
var middleware = require('../middleware');



router
    .get('/', operationController.home)
    .get('/sum', operationController.sum)
    .get('/substract', operationController.substract)
    .get('/multiply', operationController.multiply)
    .get('/divide', operationController.divide)

module.exports = router;
