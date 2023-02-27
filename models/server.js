const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = "/api/usuarios";
        // Middleware
        this.middlewares();
        // Rutas de la aplicacion
        this.routes();
    }
    middlewares() {
        // Directorio publico
        this.app.use(express.static("public"));

        // Parseo y lectura del body
        this.app.use(express.json());

        //CORS
        this.app.use(cors());
    }
    routes() {
        this.app.use(this.usuariosPath,require("../routes/user"));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port);
        });
    }
}

module.exports = Server;
