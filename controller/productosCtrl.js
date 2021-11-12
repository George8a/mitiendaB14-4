const { response } = require("express");
const express = require("express");
const ProductosDao = require("../models/productosDAO");
const productosCrl = {};


productosCrl.insertar = async(producto) => {
    try {
        return await ProductosDao.create(producto);
    } catch (error) {
        console.log("productosCrl.insertar" + error);

    }
}


productosCrl.listar = async(producto) => {
    try {
        return await ProductosDao.create(producto);
    } catch (error) {
        console.log("productosCrl.insertar" + error);

    }
}



module.exports = productosCrl;