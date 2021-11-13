const conexion = require('../DB/conexionDB.js');
const facturaSchema = conexion.Schema({

}, {
    collection: 'Facturas',
    versionKey: false
});
const FacturasDao = conexion.model('Facturas', productoSchema);
module.exports = FacturasDao;