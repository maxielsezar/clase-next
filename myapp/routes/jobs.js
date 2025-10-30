var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('crear jobs');
});



router.put('/', function(req, res, next) {
  res.send('update trabajo');
});


router.delete('/', function(req, res, next) {
  res.send('eliminar job');
});

module.exports = router;