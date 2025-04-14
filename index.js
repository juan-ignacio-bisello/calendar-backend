const express = require('express');
const { dbConnection } = require('./DB/config');
const cors = require('cors');
const path = require( 'path' );
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

app.use('*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'public/index.html' ) );
});

// escuchar peticion
app.listen( process.env.PORT , () => {
    console.log(`servidor en puerto ${ process.env.PORT }` );
} )