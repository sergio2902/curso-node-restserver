require('dotenv').config();
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //middlewares
        this.middlewares();

        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use(cors());
        //parseo y lectura del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor escuchando el puerto ', this.port);
        });
    }
} //fin de la clase server

module.exports = Server;