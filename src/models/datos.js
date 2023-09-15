const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Clientes = new Schema({
    nombre: String,
    empresa: String,
    telefono: String,
    direccion: String,
    correo: String

});

module.exports = mongoose.model('datos', Clientes);