const mongoose = require("mongoose");
let uri = "mongodb+srv://jorge8a:<password>@cluster0.nirt8.mongodb.net/BDprueba?retryWrites=true&w=majority"
mongoose.connect(uri).then(() => {

    console.log("conectado a la BD de Mongo");

}).catch((e) => {
    console.log("Error de conexion:" + e);
})


module.exports = mongoose;