var express = require('express');
var router = express.Router();
var paymentController = require('../controllers/payment.controller');
var middleware = require('../middleware');


//router.use(middleware);

router
    .get('/', paymentController.home )
    .get('/create', paymentController.create )
    .get('/promos', paymentController.getPromos)
    .get('/discount', paymentController.applyDiscount)
    .get('/view', paymentController.viewDiscount)

module.exports = router;
