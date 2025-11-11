var express = require('express');
var router = express.Router();

<<<<<<< HEAD
const Usuario = require ("../modelo/usuario")

/* GET users listing. */
router.get('/', async(req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});
router.get('/:id', async(req, res) => {
=======
const Usuario = require('../models/Usuario');
const { json } = require('stream/consumers');

/* GET users listing. */

router.get('/', async (req, res,) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});
router.get('/:id', async (req, res,) => {
>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e
  const usuarios = await Usuario.findById(req.params.id);
  res.json(usuarios)
});
router.post('/', async function(req, res, next) {
<<<<<<< HEAD
  const {nombre, apellido}= req.body
  const NuevoUsuario= await Usuario.create({nombre, apellido})
  res.status(201).json(NuevoUsuario)
});
router.put('/:id', async(req, res) => {
  const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id,req.body, {new:true,});
  res.json(usuarioActualizado)
});
router.delete('/:id', async(req, res) => {
  const usuarios = await Usuario.findByIdAndDelete(req.params.id);
  res.json({mensaje:"usuario eliminado"})
=======
  const {nombre, apellido} = req.body
  const nuevoUsuario = await Usuario.create({nombre, apellido})
  res.status(201).json(nuevoUsuario)
});
router.put('/:id', async (req, res) => {
  const usuarioCambiado = await Usuario.findByIdAndUpdate(req.params.id, req.body , {new: true});
  res.json(usuarioCambiado);
});
router.delete('/:id', async (req, res) => {
  const usuarios = await Usuario.findByIdAndDelete(req.params.id);
  res.send({mensaje:'usuario eliminado'});
>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e
});

module.exports = router;
