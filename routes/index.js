var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>THIS SHOULD NOT PRINT x2</p>');
});

module.exports = router;
