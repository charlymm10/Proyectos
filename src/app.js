const express = require('express');//referencia a framework express
const app = express();//se crea la aplicacion de express
const log = require('morgan');//para saber los clientes conectados
const bodyParser = require('body-parser');

const IndexRoutes = require('./routers/index.js');


app.set('port', process.env.PORT || 3000);//asigna un puerto

//Middleware utiliza morgan
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended:false}));
//rutas
app.use('/', IndexRoutes);

app.liste(app.get('port'), () =>{
    console.log('El servidor esta funcionando en el puerto ', app.get('port'));
}

);
//desplegar mensaje de conectado