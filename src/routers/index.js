const express = require('express');
const router = express.Router();
const model = require('../models/datos')();
const Clientes = require('../models/datos');


router.get('/', async (req,res)=>{
    const datos = await Clientes.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
});

router.post('/add', async (req,res)=>{
    const valor = new Clientes(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/')
    });

router.get('/del/:id', async (req,res)=>{
    const{id} = req.params;
    await Clientes.findByIdAndRemove(id);
    res.redirect('/')
    });



module.exports = router;