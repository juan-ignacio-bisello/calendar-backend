const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.DB_CNN );
        mongoose.set( 'strictQuery', true );

        console.log('DB online');
    } catch (error) {
        console.log( error );
        throw new Error('ERROR en inicializacion de BD');
    }
}


module.exports = {
    dbConnection
}