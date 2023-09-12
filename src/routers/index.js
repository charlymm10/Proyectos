const express = require('express');
const router = express.Router();
const model = require('../models/Productos.js')();
const Productos = require('../model/Productos.js');

router.get('/', async (req,res)=>{
    const datos = await Productos.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
});


module.exports = router;