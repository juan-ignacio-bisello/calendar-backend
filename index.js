const express = require('express');
const { dbConnection } = require('./DB/config');
const cors = require('cors');
require('dotenv').config();

//crear servidor de express
const app = express();

//Base de Datos
dbConnection();

// Cors
app.use( cors() );

// Directorio publico
app.use( express.static('public') );

// Lectura y parceo
app.use( express.json() );

// rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );

// escuchar peticion
app.listen( process.env.PORT , () => {
    console.log(`servidor en puerto ${ process.env.PORT }` );
} )