const conexion = require('../DB/conexionDB.js');
const facturaSchema = conexion.Schema({

    codigoFactura: Number,
    tipoTransacion: String,
    fecha: String,
    productos: [{

        descripcion: String,
        unidadMedida: String,
        tipoProducto: String,
        cantidad: String,
        valorVenta: String


    }],
    totalFactura: Number,
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
const FacturasDao = conexion.model('Facturas', facturaSchema);
module.exports = FacturasDao;