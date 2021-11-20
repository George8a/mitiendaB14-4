const { response } = require("express");
const express = require("express");
const ClienteProveedoresDao = require("../models/clienteProveedorDAO");
const ClienteProveedoresCrl = {};


ClienteProveedoresCrl.listar = async() => {
    try {
        return await ClienteProveedoresDao.find();
    } catch (error) {
        console.log("ClienteProveedoresDao.find" + error);

    }
}

ClienteProveedoresCrl.actualizar = async(clienteProveedor) => {
    try {
        let id = clienteProveedor._id;
        delete clienteProveedor._id;
        return await ClienteProveedoresDao.findByIdAndUpdate(id, clienteProveedor);
    } catch (error) {
        console.log("ClienteProveedoresCrl.actualizar Error" + error);

    }
}

ClienteProveedoresCrl.eliminar = async(id) => {

    await ClienteProveedoresDao.deleteOne({ _id: id });

}

ClienteProveedoresCrl.insertar = async(ClienteProveedor) => {
    try {
        return await ClienteProveedoresDao.create(ClienteProveedor);
    } catch (error) {
        console.log("ClienteProveedoresCrl.insertar" + error);

    }
}



module.exports = ClienteProveedoresCrl;