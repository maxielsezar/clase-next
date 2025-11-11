var express = require('express');
var router = express.Router();
<<<<<<< HEAD
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
=======

const Trabajos = require('../models/Trabajos');
const { json } = require('stream/consumers');

/* GET users listing. */
router.get('/', async (req, res,) => {
  const Trabajos = await Trabajos.find();
  res.json(Trabajos)
});
router.post('/', async function(req, res, next) {
  const {nombre, apellido} = req.body
  const nuevoTrabajos = await Trabajos.create({nombre, apellido })
  res.status(201).json(nuevoTrabajos)
});
router.put('/', function(req, res, next) {
  res.send('update job');
});
router.delete('/', function(req, res, next) {
  res.send('deleta job');
>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e
});

module.exports = router;
