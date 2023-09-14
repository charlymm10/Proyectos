const express = require('express');
const router = express.Router();
const model = require('../models/Clientes.js')();
const Productos = require('../model/Clientes.js');

router.get('/', async (req,res)=>{
    const datos = await Clientes.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
});


module.exports = router;