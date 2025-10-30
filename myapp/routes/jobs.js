var express = require('express');
var router = express.Router();

const Trabajo = require('../modelos/Trabajo')

/* GET users listing. */
router.get('/', async (req, res) => {
  const trabajos = await Trabajo.find();
  res.json(trabajos)
});

router.post('/',async function(req, res, next) {
  const {empleo, lugar} = req.body
  const nuevoTrabajo= await Trabajo.create({empleo, lugar})
  res.status(201).json(nuevoTrabajo)
});

router.put('/', function(req, res, next) {
  res.send('update user');
});

router.delete('/', function(req, res, next) {
  res.send('delete user');
});


module.exports = router;