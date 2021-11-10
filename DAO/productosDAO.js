const conexion = require('../DB/conexionDB.js')
const productoSchema = conexion.Schema({
    descripcion = String,
    unidadMedida = String,
    tipoProducto = String,
    stock = String,
    valorVenta = String
}, {
    collection: 'Productos',
    versionKey: false
});
const ProductosDao = conexion.model('Productos', personaSchema);
module.exports = ProductosDao;