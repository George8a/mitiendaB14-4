const conexion = require('../DB/conexionDB.js');
const clienteProveedorSchema = conexion.Schema({
    tipoDocumento: String,
    documento: String,
    tipoPersona: String,
    nombre: String,
    direccion: String,
    telefono: String,
    email: String

}, {
    collection: 'clienteProveedores',
    versionKey: false
});
const clienteProveedorDao = conexion.model('clienteProveedores', clienteProveedorSchema);
module.exports = clienteProveedorDao;