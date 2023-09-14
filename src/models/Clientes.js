const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Productos = new Schema({
    producto: String,
    precio: String,
    decuento: String

});

module.exports = mongoose.model('datos', Clientes);