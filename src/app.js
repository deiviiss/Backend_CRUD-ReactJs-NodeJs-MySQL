//start app

// dependends
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const morgan = require("morgan");//muestra por consola las peticiones que llegan al server

//inizializations
const app = express();

//settings
app.set('port', process.env.PORT || 5000); //server port

//midlewares (peticiones)
app.use(cors());//http header
app.use(express.json()); // interpreta los objetos json
app.use(morgan('dev')); //mensajes servidor
app.use(bodyParser.urlencoded({ extended: true })); //método de body parser para entender los datos

//global variables

// routes
app.use(require('./routes/index.js')); //ruta inicial

//starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})