const conexion = require('../DB/conexionDB.js');
const usuarioSchema = conexion.Schema({
    usuario: String,
    contraseña: String,
    nombreUsuario: String

}, {
    collection: 'Usuarios',
    versionKey: false
});
const UsuariosDao = conexion.model('Usuarios', usuarioSchema);
module.exports = UsuariosDao;