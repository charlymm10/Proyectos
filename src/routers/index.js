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

    router.get('/del/:id', async(req,res) => {
        const {id} = req.params;
        await Clientes.findByIdAndRemove(id);
        res.redirect('/')
    })
    
    // router.get('/upd/:id', async(req,res) => {
    //     const {id} = req.params;
    //     await Cliente.findByIdAndUpdate(id);
    //     res.redirect('/')
    // })
    
    router.post('/upd/:id', async(req, res)=>{
        const{id} = req.params;
        const{nombre, empresa, telefono, direccion, correo} = req.body;
        await Clientes.findByIdAndUpdate(id, {nombre, empresa, telefono, direccion, correo});
        res.redirect('/')
    })
    
    
    module.exports = router;