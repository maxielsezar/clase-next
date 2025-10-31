var express = require('express');
var router = express.Router();
const Trabajo = require ("../modelo/trabajos")

/* GET users listing. */
router.get('/', async(req, res) => {
  const trabajos = await Trabajo.find();
  res.json(trabajos)
});

router.post('/', function(req, res, next) {
  res.send('subir jobs');
});
router.put('/', function(req, res, next) {
  res.send('actualizar jobs');
});
router.delete('/', function(req, res, next) {
  res.send('eliminar jobs');
});

module.exports = router;
