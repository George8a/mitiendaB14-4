const { request, response } = require("express");
const express = require("express");
const productosCrl = require("./controller/usuariosCtrl");
const ProductosDao = require("./models/productosDAO");
const usuariosCrl = require("./controller/usuariosCtrl");
const usuarioDao = require("./models/usuariosDAO");
const clienteproveedoresCrl = require("./controller/clienteProveedorCtrl");
const clienteproveedoresDao = require("./models/clienteProveedorDAO");

const app = express();
app.use(express.json());


/*************************inicio productos************************************ **/

app.post('/api/productos', async(request, response) => {
    try {
        let producto = request.body;
        await productosCrl.insertar(producto);
        response.status(200).send("El producto ha sido guardado con exito");
    } catch (error) {

        console.log("Error al listar" + error);
        response.status(400).send("Error al listar: " + error);

    }
});

app.get('/api/productos', async(request, response) => {
    try {

        const producto = await productosCrl.listar();
        response.status(201).json(producto);
    } catch (error) {

        console.log("Error al guardar" + error);
        response.status(400).send("Error al guardar: " + error);

    }
});

app.put('/api/productos', async(request, response) => {
    try {
        let producto = request.body;
        await productosCrl.actualizar(producto)
        response.status(200).send("producto actualizado");
    } catch (error) {
        console.log("Error put" + error);
        response.status(400).send("Error Put: " + error);

    }

})


app.delete('/api/productos/:id', async(request, response) => {
        try {
            let id = request.params.id;
            await productosCrl.eliminar(id)
            response.status(200).send("producto eliminado");
        } catch (error) {
            console.log("Error put" + error);
            response.status(400).send("Error Put: " + error);

        }

    })
    /*************************fin productos************************************ **/

/*************************inicio usuarios************************************ **/

app.post('/api/usuarios', async(request, response) => {
    try {
        let usuario = request.body;
        await usuariosCrl.insertar(usuario);
        response.status(200).send("El usuario ha sido guardado con exito");
    } catch (error) {

        console.log("Error al insertar" + error);
        response.status(400).send("Error al insertar: " + error);

    }
});

app.get('/api/usuarios', async(request, response) => {
    try {

        const usuario = await usuariosCrl.listar();
        response.status(201).json(usuario);
    } catch (error) {

        console.log("Error al listar" + error);
        response.status(400).send("Error al listar: " + error);

    }
});

app.put('/api/usuarios', async(request, response) => {
    try {
        let usuario = request.body;
        await usuariosCrl.actualizar(usuario)
        response.status(200).send("usuario actualizado");
    } catch (error) {
        console.log("Error put" + error);
        response.status(400).send("Error Put: " + error);

    }

})


app.delete('/api/usuarios/:id', async(request, response) => {
        try {
            let id = request.params.id;
            await usuariosCrl.eliminar(id)
            response.status(200).send("usuario eliminado");
        } catch (error) {
            console.log("Error put" + error);
            response.status(400).send("Error Put: " + error);

        }

    })
    /*************************fin usuarios************************************ **/
    /*************************inicio clienteProveedores************************************ **/

app.post('/api/clienteProveedores', async(request, response) => {
    try {
        let clienteProveedor = request.body;
        await clienteproveedoresCrl.insertar(clienteProveedor);
        response.status(200).send("El clienteProveedores ha sido guardado con exito");
    } catch (error) {

        console.log("Error al insertar" + error);
        response.status(400).send("Error al insertar: " + error);

    }
});

app.get('/api/clienteProveedores', async(request, response) => {
    try {

        const clienteProveedor = await clienteproveedoresCrl.listar();
        response.status(201).json(clienteProveedor);
    } catch (error) {

        console.log("Error al listar" + error);
        response.status(400).send("Error al listar: " + error);

    }
});

app.put('/api/clienteProveedores', async(request, response) => {
    try {
        let clienteProveedor = request.body;
        await clienteproveedoresCrl.actualizar(clienteProveedor);
        response.status(200).send("clienteProveedor actualizado");
    } catch (error) {

        console.log("Error put" + error);
        response.status(400).send("Error Put: " + error);

    }

})


app.delete('/api/clienteProveedores/:id', async(request, response) => {
        try {
            let id = request.params.id;
            await clienteproveedoresCrl.eliminar(id)
            response.status(200).send("clienteProveedores eliminado");
        } catch (error) {
            console.log("Error put" + error);
            response.status(400).send("Error Put: " + error);

        }

    })
    /*************************fin clienteProveedores************************************ **/




app.listen(1900, () => {
    console.log('Server runnig...')
})