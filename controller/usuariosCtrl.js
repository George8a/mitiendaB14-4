const { response } = require("express");
const express = require("express");
const usuariosDao = require("../models/usuariosDAO");
const usuariosCrl = {};


usuariosCrl.listar = async() => {
    try {
        return await usuariosDao.find();
    } catch (error) {
        console.log("usuariosCrl.listar" + error);

    }
}

usuariosCrl.actualizar = async(usuario) => {
    try {
        let id = usuario._id;
        delete usuario._id;
        return await usuariosDao.findByIdAndUpdate(id, usuario);
    } catch (error) {
        console.log("usuariosCrl.actualizar Error" + error);

    }
}

usuariosCrl.eliminar = async(id) => {

    await usuariosDao.deleteOne({ _id: id });

}

usuariosCrl.insertar = async(usuario) => {
    try {
        return await usuariosDao.create(usuario);
    } catch (error) {
        console.log("usuariosCrl.insertar" + error);

    }
}



module.exports = usuariosCrl;