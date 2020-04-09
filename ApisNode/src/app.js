"use strict"

let express = require("express");
let bodyParser = require("body-parser");
const pool = require("./database/database");

//inicar express
const app = express();

//rutas Apis
const getData_routes = require("./routes/sync.routes");


//parseo de JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Metodos y cabeceras para las peticiones http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//rutas http
app.use("/api", getData_routes);

//exportacion en todo el proyecto
module.exports = app;