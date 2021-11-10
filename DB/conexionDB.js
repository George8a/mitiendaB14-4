const mongoose = require("mongoose");
let clave = "admin";
let coleccion = "BDTienda-B19-4";
let uri = "mongodb+srv://jorge8a:" + clave + "@cluster0.nirt8.mongodb.net/" + coleccion + "?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {

    console.log("conectado a la BD de Mongo");


}).catch((error) => {
    console.log("Error de conexion:" + error);
});


module.exports = mongoose;