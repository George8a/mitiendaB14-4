const { request, response } = require("express");
const express = require("express");
const productosCrl = require("./controller/productosCtrl");
const ProductosDao = require("./models/productosDAO");

const app = express();
app.use(express.json());

app.use(express.json());

app.post('/api/productos', async(request, response) => {
    try {
        let producto = request.body;
        await productosCrl.insertar(producto);
        response.status(200).send("El producto ha sido guardado con exito");
    } catch (error) {

        console.log("Error al guardar" + error);
        response.status(400).send("Error al guardar: " + error);

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
app.listen(1900, () => {
    console.log('Server runnig...')
})