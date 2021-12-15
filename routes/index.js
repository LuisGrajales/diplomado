var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let home = {'routes': ['/auth','/tasks','/payment','/operation','/shipment', '/debug-sentry']}
        res.send(home)
  res.send();
});

module.exports = router;
