const { response } = require("express");
const express = require("express");
const ProductosDao = require("../models/productosDAO");
const productosCrl = {};


productosCrl.listar = async() => {
    try {
        return await ProductosDao.find();
    } catch (error) {
        console.log("ProductosDao.find" + error);

    }
}

productosCrl.actualizar = async(producto) => {
    try {
        let id = producto._id;
        delete producto._id;
        return await ProductosDao.findByIdAndUpdate(id, producto);
    } catch (error) {
        console.log("productosCrl.insertarPersonas Error" + error);

    }
}

productosCrl.eliminar = async(id) => {

    await ProductosDao.deleteOne({ _id: id });

}

productosCrl.insertar = async(producto) => {
    try {
        return await ProductosDao.create(producto);
    } catch (error) {
        console.log("productosCrl.insertar" + error);

    }
}



module.exports = productosCrl;