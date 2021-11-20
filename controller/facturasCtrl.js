const { response } = require("express");
const express = require("express");
const facturasDao = require("../models/facturasDAO");
const facturasCrl = {};


facturasCrl.listar = async() => {
    try {
        return await facturasDao.find();
    } catch (error) {
        console.log("facturasDao.find" + error);

    }
}

facturasCrl.actualizar = async(factura) => {
    try {
        let id = factura._id;
        delete factura._id;
        return await facturasDao.findByIdAndUpdate(id, factura);
    } catch (error) {
        console.log("facturasDao.findByIdAndUpdate error" + error);

    }
}

facturasCrl.eliminar = async(id) => {

    await facturasDao.deleteOne({ _id: id });

}

facturasCrl.insertar = async(factura) => {
    try {
        return await facturasDao.create(factura);
    } catch (error) {
        console.log("facturasCrl.insertar" + error);

    }
}



module.exports = facturasCrl;