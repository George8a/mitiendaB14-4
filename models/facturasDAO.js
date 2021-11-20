const conexion = require('../DB/conexionDB.js');
const facturaSchema = conexion.Schema({

    codigoFactura: Int,
    tipoTransacion: String,
    fecha: Date,
    productos: [{

        descripcion: String,
        unidadMedida: String,
        tipoProducto: String,
        valorVenta: String


    }],
    totalFactura: int,
    tipoDocumento: String,
    documento: String,
    tipoPersona: String,
    nombre: String,
    direccion: String,
    telefono: String,
    email: String,
    estadoFactura: String,
    nombreUsuario: String

}, {

    collection: 'Facturas',
    versionKey: false
});
const FacturasDao = conexion.model('Facturas', productoSchema);
module.exports = FacturasDao;