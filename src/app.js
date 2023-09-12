const express = require('express');//referencia a framework express
const app = express();//se crea la aplicacion de express
const log = require('morgan');//para saber los clientes conectados
const bodyParser = require('body-parser');
const path = require('path');

const IndexRoutes = require('./routers/index.js');
const {default: mongoose} = require('mongoose');


app.set('port', process.env.PORT || 3000);//asigna un puerto

//Middleware utiliza morgan
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended:false}));
//rutas
app.use('/', IndexRoutes);

app.listen(app.get('port'), () =>{
    console.log('El servidor esta funcionando en el puerto ', app.get('port'));
}

);
//conectar a la base de datos
mongoose.connect("mongodb+srv://charly:JuanCarlos2001@cluster0.fxftri0.mongodb.net/Imprenta?retryWrites=true&w=majority")
.then(bd=>console.log('BD conectada!'))
.catch(err=>console.log(err));


//establecer sistema de vista
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');


//desplegar mensaje de conectado