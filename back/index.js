const express = require ("express");
const app = express();
const port = 5000;
var bodyparser = require("body-parser");
const administrador = require("./controllers/administrador");
const blog = require("./controllers/blog")
const usuario = require("./controllers/usuario");
const detalleventa = require("./controllers/detalle_venta");
const productos = require("./controllers/productos");
const promociones = require("./controllers/promociones");
const sucursales = require("./controllers/sucursales");
const ventas = require("./controllers/ventas");
const cors = require("cors");
require('dotenv').config();

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use (bodyparser.json());
app.use(cors());
app.use(administrador);
app.use(blog);
app.use(usuario);
app.use(detalleventa);
app.use(productos);
app.use(promociones);
app.use(sucursales);
app.use(ventas);
app.listen(port,()=>{
    console.log( `⚡️ [server]: Server is running at http://localhost:${port}`)
});